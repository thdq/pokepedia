<template>
    <div>
        <Card>
            <template #content>
                <div class="flex place-content-center">
                    <div class="title-not-found">
                        <span class="place-self-center text-9xl"> 4 </span>
                        <div class="place-self-center">
                            <img class="w-20" src="src/assets/images/pokeball-inside.png" />
                        </div>
                        <span class="place-self-center text-9xl"> 4 </span>
                    </div>
                </div>

                <div data-testid="alert-message" class="w-full m-auto text-center mt-20">
                    <span class="text-3xl font-semibold text-gray-800"> Desculpe, não encontramos essa página. </span>
                </div>
            </template>
        </Card>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {


        return {}
    }
})
</script>

<style scoped>

.title-not-found {
    @apply grid grid-cols-3 font-bangers gap-x-7 text-red-500
}

</style>
