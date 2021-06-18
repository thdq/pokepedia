<template>
    <div>
        <h2 class="text-gray-500 font-semibold text-2xl tracking-wide my-4">
            <span class="text-secondary"># </span> Gerações de games
        </h2>

        <div v-if="requestStatus <= 1">
            <Skeleton type="card" />
            <Skeleton type="card" />
            <Skeleton type="card" />
        </div>
        <div v-else-if="requestStatus === PromiseStatus.success">
            <Timeline>
                <div v-for="(item, i) in generations.results" :key="i">
                    <TimelineItem :position="i % 2 == 0? 'left' : 'right'">
                        <Card class="my-9">
                            <template #title>
                                <div>
                                    <h2 class="text-gray-800 font-semibold text-3xl tracking-wide mb-2 float-left">
                                        {{ item.name }}
                                    </h2>
                                    <span class="float-right text-gray-500 flex">
                                        <LocationMarkerIcon class="w-6 h-6 text-secondary mr-1" /> {{ item.details.main_region.name.toUpperCase() }}
                                    </span>
                                </div>
                            </template>
                            <template #content>
                                <div class="grid grid-rows-1">
                                    <div class="w-full">
                                        <div class="mb-5">
                                            Habilidades: <span class="font-semibold">
                                                <Chips :limit="3" :items="item.details.abilities" />
                                            </span>
                                        </div>
                                        <div class="mb-5">
                                            Idiomas: <span class="font-semibold">
                                                <Chips :limit="3" :items="item.details.names" />
                                            </span>
                                        </div>
                                        <div class="mb-5">
                                            Tipos de movimentos: <span class="font-semibold">
                                                <Chips :limit="3" :items="item.details.moves" />
                                            </span>
                                        </div>
                                        <div class="mb-5">
                                            Tipos de mecânica: <span class="font-semibold">
                                                <Chips :limit="3" :items="item.details.types" />
                                            </span>
                                        </div>
                                        <div class="mb-5">
                                            Espécies de pokemon: <span class="font-semibold">
                                                <Chips :limit="3" :items="item.details.pokemon_species" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <template #footer >
                                <div class="flex flex-row-reverse space-x-4 space-x-reverse w-full">
                                    <button class="button-details">Ver todos os detalhes</button>
                                </div>
                            </template>
                        </Card>
                    </TimelineItem>
                </div>
            </Timeline>


        </div>
        <div v-else-if="requestStatus === PromiseStatus.error">
            um erro
        </div>
    </div>
</template>

<script lang="ts">
import { AxiosStatic } from 'axios'
import { defineComponent, onMounted, ref, inject } from 'vue'
import { GenerationModel } from '../../domain/models/generations-model'
import { RemoteGetAllGenerations } from '../../data/usecases/get-all-generations/get-all-generations'
import { PromiseStatus } from '../../helpers/promise-enum'
import { LocationMarkerIcon } from '@heroicons/vue/outline'

export default defineComponent({
    components: {
        LocationMarkerIcon
    },
    setup () {
        const $axios = inject('$axios') as AxiosStatic

        const generations = ref<GenerationModel>({
            count: 0,
            next: "",
            previous: "",
            results: []
        })

        const messageError = ref<string>("")
        const requestStatus = ref<PromiseStatus>(0)

        onMounted( async () => {

            try {
                requestStatus.value = PromiseStatus.pending

                generations.value = await new RemoteGetAllGenerations($axios).getAllGenerations()

            } catch (error) {

                requestStatus.value = PromiseStatus.error
                messageError.value = "Ocorreu um erro ao recuperar informações da API."

            } finally {

                if(requestStatus.value != PromiseStatus.error) requestStatus.value = PromiseStatus.success

            }

        })


        return {
            generations,
            requestStatus,
            PromiseStatus
        }
    }
})
</script>

<style scoped>

.button-details {
    @apply bg-primary hover:bg-secondary px-5 py-3 text-sm font-medium tracking-wider border text-white rounded-md
}

</style>
