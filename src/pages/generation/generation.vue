<template>
    <div>
        <div v-if="requestStatus <= 1">
            <Skeleton type="card" />
        </div>
        <div v-else-if="requestStatus === PromiseStatus.success">
            <Card>
                <template #title>
                    <h2 class="text-gray-800 font-semibold text-3xl tracking-wide mb-2 float-left">
                        {{ generation.name }}
                    </h2>
                </template>
                <template #content>
                    <div class="grid grid-rows-1">
                        <div class="w-full">
                            <div class="mb-7">
                                Região principal: <span class="font-semibold">
                                    {{ generation?.main_region?.name }}
                                </span>
                                <div class="mt-5">
                                    <img class="w-6/12 rounded-sm" v-image-fallback :src="`/src/assets/images/${generation?.main_region?.name}.png`" />
                                </div>
                            </div>

                            <div class="grid grid-cols-2 gap-9">
                                <Table :itemsPerPage="10" :data="movesDataTable.data" :columns="movesDataTable.columns" />
                            </div>
                        </div>
                    </div>
                </template>
            </Card>
        </div>
    </div>
</template>

<script lang="ts">
import { AxiosStatic } from 'axios'
import { computed, defineComponent, inject, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { RemoteGetGenerations } from '../../data/usecases/get-all-generations/get-all-generations'
import { GenerationDetailsModel } from '../../domain/models/generation-details-model'
import { PromiseStatus } from '../../helpers/promise-enum'

export default defineComponent({
    setup () {
        const $axios = inject('$axios') as AxiosStatic
        const route = useRoute()

        const generation = ref<GenerationDetailsModel>()
        const requestStatus = ref<number>(PromiseStatus.notStarted)


        onMounted(async () => {

            try {
                requestStatus.value = PromiseStatus.pending

                const id = route.params.id[0]

                generation.value = await new RemoteGetGenerations($axios).getDetailsGeneration(id)

            } catch (error) {
                requestStatus.value = PromiseStatus.error
            } finally {
                if (requestStatus.value != PromiseStatus.error) requestStatus.value = PromiseStatus.success
            }

        })

        const movesDataTable = computed(() => {

            const data = generation.value?.moves

            const columns = [
                {
                    key: "name",
                    label: "Movimentos"
                }
            ]

            return {
                data,
                columns
            }
        })


        return {
            generation,
            requestStatus,
            PromiseStatus,
            movesDataTable
        }
    }
})
</script>

<style scoped>

</style>
