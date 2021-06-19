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
                                    <img
                                        v-image-fallback
                                        class="w-6/12 rounded-sm"
                                        :src="`/src/assets/images/${generation?.main_region?.name}.png`"
                                    >
                                </div>
                            </div>

                            <div class="grid grid-cols-2 gap-9 capitalize border-t-2 border-b-2 py-7 border-gray-100">
                                <Table :itemsPerPage="10" :data="movesDataTable.data" :columns="movesDataTable.columns" />
                                <Table :itemsPerPage="10" :data="pokemonsDataTable.data" :columns="pokemonsDataTable.columns" />
                            </div>
                            <div class="py-7">
                                Tipos de mecânicas:
                                <div class="mt-5 grid grid-cols-7 gap-y-4 capitalize">

                                    <div v-for="(item, i) in generation.types" :key="i" class="relative bg-white py-6 px-6 rounded-xl w-40 my-4 shadow-sm border-2 border-gray-100">
                                        <div :class="`bg-custom-${item.name} text-white flex items-center absolute rounded-full py-4 px-4 shadow-sm left-1/4 -top-6`">
                                            <img :src="`src/assets/images/types/${item.name}.svg`" class="w-12" />
                                        </div>
                                        <div class="mt-12">
                                            <p class="text-xl font-semibold my-2 text-center">{{ item.name }}</p>
                                        </div>
                                    </div>
                                </div>
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

            const columns = [{
                key: "name",
                label: "Movimentos"
            }]

            return { data, columns }
        })

        const pokemonsDataTable = computed(() => {

            const data = generation.value?.pokemon_species

            const columns = [{
                key: "name",
                label: "Espécie de pokemons"
            }]

            return { data, columns }
        })

        const typeDataTable = computed(() => {

            const data = generation.value?.types

            const columns = [{
                key: "name",
                label: "Tipos de mecânicas"
            }]

            return { data, columns }
        })

        return {
            generation,
            requestStatus,
            PromiseStatus,
            movesDataTable,
            pokemonsDataTable,
            typeDataTable
        }
    }
})
</script>

<style scoped>

.bg-custom-bug {
    background: #92BC2C;
}

.bg-custom-dark {
    background: #595761;
}

.bg-custom-dragon {
    background: #0C69C8;
}

.bg-custom-electric {
    background: #F2D94E;
}

.bg-custom-fairy {
    background: #EE90E6;
}

.bg-custom-fighting {
    background: #D3425F;
}

.bg-custom-fire {
    background: #FBA54C;
}

.bg-custom-flying {
    background: #A1BBEC;
}

.bg-custom-ghost {
    background: #5F6DBC;
}

.bg-custom-grass {
    background: #5FBD58;
}

.bg-custom-ground {
    background: #DA7C4D;
}

.bg-custom-ice {
    background: #75D0C1;
}

.bg-custom-normal {
    background: #A0A29F;
}

.bg-custom-poison {
    background: #B763CF;
}

.bg-custom-psychic {
    background: #FA8581;
}

.bg-custom-rock {
    background: #C9BB8A;
}

.bg-custom-steel {
    background: #5695A3;
}

.bg-custom-water {
    background: #539DDF;
}

</style>
