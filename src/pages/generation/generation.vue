<template>
    <div>
        <div v-if="requestStatus <= 1">
            <Skeleton type="card" />
        </div>
        <div v-else-if="requestStatus === PromiseStatus.success">
            <Card class="mb-10">
                <template #title>
                    <h2 class="text-gray-800 dark:text-white font-semibold text-4xl tracking-wide mb-2 float-left">
                        {{ t(`pages.generation.${generation?.name}`) }}
                    </h2>
                </template>
                <template #content>
                    <div class="grid grid-rows-1">
                        <div class="w-full">
                            <div class="mb-7">
                                {{ t('pages.generation.labels.region') }}: <span class="font-semibold">
                                    {{ generation?.main_region?.name }}
                                </span>
                                <div class="mt-5">
                                    <img
                                        v-image-fallback
                                        class="max-w-full max-h-96 rounded-sm"
                                        :src="`${regions[`/src/assets/images/regions/${generation?.main_region?.name}.png`].default}`"
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </Card>
            <Card v-if="generation?.types?.length" class="mb-10">
                <template #title>
                    <h2 class="text-gray-800 dark:text-white font-semibold text-xl tracking-wide mb-2 float-left">
                        {{ t('pages.generation.labels.types') }}
                    </h2>
                </template>
                <template #content>
                    <div class="types-grid">
                        <div v-for="(item, i) in generation?.types" :key="i" class="relative bg-white dark:bg-dark-theme py-6 px-6 rounded-xl w-40 my-4 shadow-sm border-2 border-gray-100 dark:border-gray-500">
                            <div :class="`bg-custom-${item.name} text-white flex items-center absolute rounded-full py-4 px-4 shadow-sm left-1/4 -top-6`">
                                <img
                                    :src="`${types[`/src/assets/images/types/${item?.name}.svg`].default}`"
                                    class="w-12"
                                >
                            </div>
                            <div class="mt-12">
                                <p class="text-xl font-semibold my-2 text-center">{{ item.name }}</p>
                            </div>
                        </div>
                    </div>
                </template>
            </Card>
            <Card class="mb-10">
                <template #title>
                    <h2 class="text-gray-800 dark:text-white font-semibold text-xl tracking-wide mb-2 float-left">
                        {{ t('pages.generation.labels.general-info') }}
                    </h2>
                </template>
                <template #content>
                    <div class="grid grid-cols-2 gap-x-9 capitalize border-gray-100">
                        <Table v-if="movesDataTable?.data?.length" :itemsPerPage="10" :data="movesDataTable.data" :columns="movesDataTable.columns" />
                        <Table v-if="pokemonsDataTable?.data?.length" :itemsPerPage="10" :data="pokemonsDataTable.data" :columns="pokemonsDataTable.columns" />
                    </div>
                    <div v-if="abilitiesDataTable?.data?.length" class="grid grid-rows-1 capitalize py-7 border-gray-100">
                        <Table :itemsPerPage="10" :data="abilitiesDataTable.data" :columns="abilitiesDataTable.columns" />
                    </div>
                </template>
            </Card>
            <Card class="mb-10">
                <template #title>
                    <h2 class="text-gray-800 dark:text-white font-semibold text-xl tracking-wide mb-2 float-left">
                        {{ t('pages.generation.labels.versions') }}
                    </h2>
                </template>
                <template #content>
                    <div class="versions-grid">
                        <div v-for="(item, i) in generation?.version_groups" :key="i" class="flex flex-col justify-center items-center mx-auto">
                            <img
                                v-image-fallback
                                :src="`${versions[`/src/assets/images/versions/${item?.name}.png`].default}`"
                                class="bg-gray-300 h-64 w-full rounded-lg bg-cover bg-center"
                            >
                            <div class="w-56 md:w-64 bg-white dark:bg-dark-theme -mt-10 shadow-md rounded-md overflow-hidden">
                                <div class="py-4 text-center font-bold uppercase tracking-wide text-gray-800 dark:text-white">
                                    {{ item.name }}
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </Card>
        </div>
        <div v-else-if="requestStatus == PromiseStatus.error">
            <Card >
                <template #content>
                    <div class="text-sm mb-10 text-left text-red-600 py-8 bg-red-200 border border-red-400 h-12 flex items-center p-4 rounded-lg" role="alert">
                        {{ t('pages.generation.labels.error') }}
                    </div>
                </template>
            </Card>
        </div>
    </div>
</template>

<script lang="ts">
import { useHead } from '@vueuse/head'
import { AxiosStatic } from 'axios'
import { computed, defineComponent, inject, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { RemoteGetGenerations } from '../../data/usecases/get-all-generations/get-all-generations'
import { GenerationDetailsModel } from '../../domain/models/generation-details-model'
import { PromiseStatus } from '../../helpers/promise-enum'

const regions = import.meta.globEager('/src/assets/images/regions/*.png')
const types = import.meta.globEager('/src/assets/images/types/*.svg')
const versions = import.meta.globEager('/src/assets/images/versions/*.png')

export default defineComponent({
    setup () {
        const $axios = inject('$axios') as AxiosStatic
        const route = useRoute()
        const { t } = useI18n()

        useHead({
            title: `Pokepedia | Detalhes da ${route.params.id }ª geração`
        })

        const generation = ref<GenerationDetailsModel>()
        const requestStatus = ref<number>(PromiseStatus.notStarted)


        onMounted(async () => {

            try {
                requestStatus.value = PromiseStatus.pending

                const id = route.params.id as string

                generation.value = await new RemoteGetGenerations($axios).getDetailsGeneration(id)

            } catch (error) {
                requestStatus.value = PromiseStatus.error
            } finally {
                if (requestStatus.value != PromiseStatus.error) requestStatus.value = PromiseStatus.success
            }

        })

        const movesDataTable = computed(() => {

            const data = generation.value?.moves

            const columns = [{
                key: "name",
                label: t('pages.generation.tables.moves.columns.moves')
            }]

            return { data, columns }
        })

        const pokemonsDataTable = computed(() => {

            const data = generation.value?.pokemon_species

            const columns = [{
                key: "name",
                label: t('pages.generation.tables.pokemon-species.columns.pokemon-species')
            }]

            return { data, columns }
        })

        const typeDataTable = computed(() => {

            const data = generation.value?.types

            const columns = [{
                key: "name",
                label: t('pages.generation.tables.types.columns.types')
            }]

            return { data, columns }
        })

        const abilitiesDataTable = computed(() => {

            const data = generation.value?.abilities

            const columns = [{
                key: "name",
                label: t('pages.generation.tables.abilities.columns.abilities')
            }]

            return { data, columns }

        })

        return {
            generation,
            requestStatus,
            PromiseStatus,
            movesDataTable,
            pokemonsDataTable,
            typeDataTable,
            abilitiesDataTable,
            regions,
            types,
            versions,
            t
        }
    }
})
</script>

<style scoped>


.types-grid {
    @apply mt-5 gap-4 capitalize grid grid-cols-7;
    @apply mq-max-2xl:grid-cols-5 mq-max-xl:grid-cols-4 mq-max-lg:grid-cols-3 mq-max-md:grid-cols-2;
}

.versions-grid {
    @apply grid grid-cols-4 gap-x-8;
    @apply mq-max-2xl:grid-cols-3 mq-max-xl:grid-cols-2 mq-max-lg:grid-cols-1 mq-max-md:grid-cols-none;
}

</style>
