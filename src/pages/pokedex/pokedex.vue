<template>
    <div v-if="requestStatus == PromiseStatus.success">
        <div class="pokedex-grid" v-if="pokedex?.pokemon_entries?.length">
            <div v-for="p in pokedex.pokemon_entries.slice(0, limitEntries)" :key="p.entry_number">
                <Pokemon :id="p.entry_number" />
            </div>
        </div>
        <ScrollLoader :loader-method="getPokemonEntries" />
    </div>
    <div v-else-if="requestStatus == PromiseStatus.pending">
        <div class="pokedex-grid--skeleton">
            <Skeleton class="px-16" type="pokemon" />
            <Skeleton class="px-16" type="pokemon" />
            <Skeleton class="px-16" type="pokemon" />
            <Skeleton class="px-16" type="pokemon" />
        </div>
    </div>
    <div v-else-if="requestStatus == PromiseStatus.error">
        <Card >
            <template #content>
                <div class="text-sm mb-10 text-left text-red-600 py-8 bg-red-200 border border-red-400 h-12 flex items-center p-4 rounded-lg" role="alert">
                    Ocorreu um erro ao exibir o Pokedex.
                </div>
            </template>
        </Card>
    </div>
</template>

<script lang="ts">
import { useHead } from '@vueuse/head'
import { AxiosStatic } from 'axios'
import { defineComponent, inject, onMounted, ref } from 'vue'
import Pokemon from '../../components/pokepedia/pokemon/pokemon.vue'
import { RemoteGetPokedex } from '../../data/usecases/get-pokedex/get-pokedex'
import { PokedexModel } from '../../domain/models/pokedex-model'
import { PromiseStatus } from '../../helpers/promise-enum'

export default defineComponent({
    components: {
        Pokemon
    },
    setup () {
        const axios = inject('$axios') as AxiosStatic

        useHead({
            title: "Pokepedia | Pokedex"
        })

        const pokedex = ref<PokedexModel>()
        const requestStatus = ref<number>(PromiseStatus.notStarted)
        const limitEntries = ref<number>(20)

        const getPokemonEntries = (): void => {

            if(limitEntries.value <= (pokedex.value?.pokemon_entries?.length?? 0)){
                limitEntries.value = limitEntries.value + 20
            }

        }

        onMounted(async () => {

            try {
                requestStatus.value = PromiseStatus.pending

                pokedex.value = await new RemoteGetPokedex(axios).getPokedex(2)

            } catch (error) {
                requestStatus.value = PromiseStatus.error
            } finally {
                if(requestStatus.value != PromiseStatus.error) requestStatus.value = PromiseStatus.success
            }

        })


        return {
            pokedex,
            requestStatus,
            PromiseStatus,
            limitEntries,
            getPokemonEntries
        }
    }
})
</script>

<style scoped>

.pokedex-grid {
    @apply grid grid-cols-4 gap-y-12 mt-16 place-items-center;
    @apply mq-max-3xl:grid-cols-3 mq-max-2xl:grid-cols-2 mq-max-lg:grid-cols-1;
}

.pokedex-grid--skeleton {
    @apply grid grid-cols-4 gap-y-12 mt-16;
    @apply mq-max-3xl:grid-cols-3 mq-max-2xl:grid-cols-2 mq-max-lg:grid-cols-1;
}

</style>
