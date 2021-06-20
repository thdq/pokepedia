<template>
    <div v-if="requestStatus == PromiseStatus.success" class="relative bg-white pt-6 px-6 w-96 my-6 shadow-md rounded-lg">
        <div :class="`relative bottom-24 left-0 flex items-center place-content-center`">
            <img class="w-56" :src="`https://pokeres.bastionbot.org/images/pokemon/${id}.png`"  />
        </div>
        <div class="relative -top-20">
            <div class="items-center text-center mb-8">
                <p class="text-lg text-gray-700 uppercase text-center font-semibold"> {{ pokemon?.name }} </p>

                <div class="h-2 rounded-full w-full bg-green-400" />
                <span class="text-sm font-semibold text-gray-500">  {{ pokemon.hp }} HP </span>
            </div>

            <div class="grid grid-cols-3 text-center bg-gray-100 rounded-md py-4">
                <div class="grid grid-rows-1">
                    <span class="font-semibold text-gray-600"> {{ pokemon.weight }} </span>
                    <span class="uppercase text-xs tracking-wider text-gray-500"> Weight </span>
                </div>
                <div class="flex flex-row gap-2 place-self-center">
                    <div v-for="(item, i) in pokemon.types" :key="i">
                        <div :class="`bg-custom-${item} text-white flex items-center rounded-full py-2 px-2 shadow-sm left-1/4`">
                            <img :src="`src/assets/images/types/${item}.svg`" class="w-6" />
                        </div>
                    </div>
                </div>
                <div class="grid grid-rows-1">
                    <span class="font-semibold text-gray-600"> {{ pokemon.height }} </span>
                    <span class="uppercase text-xs tracking-wider text-gray-500"> Height </span>
                </div>
            </div>
            <div class="flex text-sm mt-8">
                Ataque
                <div class="mx-3 shadow w-full bg-blue-100 rounded-md">
                    <div class="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-md max-w-full" :style="`width: ${pokemon.attack}%`">
                        {{ pokemon.attack }}
                    </div>
                </div>

                Defesa
                <div class="ml-3 shadow w-full bg-red-100 rounded-md">
                    <div class="bg-red-500 text-xs leading-none py-1 text-center text-white rounded-md max-w-full" :style="`width: ${pokemon.defense}%`">
                        {{ pokemon.defense }}
                    </div>
                </div>
            </div>
            <div class="flex text-sm mt-8">
                Velocidade
                <div class="ml-3 shadow w-full bg-yellow-100 rounded-md">
                    <div class="bg-yellow-500 text-xs leading-none py-1 text-center text-white rounded-md max-w-full" :style="`width: ${pokemon.speed}%`">
                        {{ pokemon.speed }}
                    </div>
                </div>
            </div>

            <div class="flex gap-1 text-sm mt-8">
                Taxa de captura: <span class="font-semibold"> {{ pokemon.catchRate }}% </span>
            </div>
        </div>
    </div>
    <div v-else-if="requestStatus == PromiseStatus.pending">
        <Skeleton class="px-3" type="card" />
    </div>
</template>

<script lang="ts">
import { AxiosStatic } from 'axios'
import { computed, defineComponent, inject, onMounted, ref } from 'vue'
import { AllPokemonInfo } from '../../../domain/models/all-pokemon-info'
import { RemoteGetPokedex } from '../../../data/usecases/get-pokedex/get-pokedex'
import { PromiseStatus } from '../../../helpers/promise-enum'

export default defineComponent({
    name: "Pokemon",
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    setup (props) {

        const $axios = inject('$axios') as AxiosStatic
        const allPokemonInfo = ref<AllPokemonInfo>()

        const requestStatus = ref<number>(PromiseStatus.notStarted)

        onMounted(async () => {

            try {
                requestStatus.value = PromiseStatus.pending

                allPokemonInfo.value = await new RemoteGetPokedex($axios).getAllPokemonInfo(props.id)

            } catch (error) {
                requestStatus.value = PromiseStatus.error
            } finally {
                if (requestStatus.value != PromiseStatus.error) requestStatus.value = PromiseStatus.success
            }

        })

        const pokemon = computed(() => {

            let hp = 0
            let attack = 0
            let defense = 0
            let speed = 0

            const name = allPokemonInfo.value?.pokemon.name

            allPokemonInfo.value?.pokemon.stats.map(stat => {

                switch (stat.stat.name) {
                    case 'hp':
                        hp = stat['base_stat'];
                    break;
                    case 'attack':
                        attack = stat['base_stat'];
                    break;
                    case 'defense':
                        defense = stat['base_stat'];
                    break;
                    case 'speed':
                        speed = stat['base_stat'];
                    break;
                }

            })

            const height = `${(allPokemonInfo.value?.pokemon.height || 0) / 10}m`

            const weight = `${(Number(allPokemonInfo.value?.pokemon.weight + '0')) / 100}Kg`

            const types = allPokemonInfo.value?.pokemon.types.map(t => t.type.name)

             const catchRate = Math.round((100 / 255) * (allPokemonInfo.value?.pokemonSpecie.capture_rate || 0));

            return {
                name,
                hp,
                attack,
                defense,
                speed,
                height,
                weight,
                types,
                catchRate
            }

        })




        return {
            pokemon,
            requestStatus,
            PromiseStatus
        }
    }
})
</script>

<style scoped>

</style>
