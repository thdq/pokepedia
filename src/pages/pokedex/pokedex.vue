<template>
    <div class="pokedex-grid" v-if="pokedex?.pokemon_entries?.length">
        <div v-for="p in pokedex.pokemon_entries" :key="p.entry_number">
            <Pokemon :id="p.entry_number" />
        </div>
    </div>
</template>

<script lang="ts">
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

        const pokedex = ref<PokedexModel>()
        const requestStatus = ref<number>(PromiseStatus.notStarted)

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
            PromiseStatus
        }
    }
})
</script>

<style scoped>

.pokedex-grid {
    @apply grid grid-cols-4 gap-y-12 mt-16 place-items-center;
    @apply mq-max-3xl:grid-cols-3 mq-max-2xl:grid-cols-2 mq-max-lg:grid-cols-1;
}

</style>
