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
            <Card v-for="(item, i) in generations.results" :key="i" class="my-9">
                <template #title>
                    <h2 class="text-gray-800 font-semibold text-2xl tracking-wide mb-2">
                        {{ item.name }}
                    </h2>
                </template>
                <template #content>
                    {{ item.url }}
                </template>
            </Card>
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

export default defineComponent({
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

</style>
