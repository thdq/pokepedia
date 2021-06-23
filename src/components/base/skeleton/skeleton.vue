<template>
    <div v-if="type === 'card'">
        <Card data-testid="type-card" class="my-9">
            <template #title>
                <div class="h-7 bg-gray-300 rounded w-1/4 animate-pulse"></div>
            </template>
            <template #content>
                <div class="h-5 bg-gray-300 rounded w-3/4 my-3 animate-pulse"></div>
                <div class="h-5 bg-gray-300 rounded w-3/4 my-3 animate-pulse"></div>
            </template>
        </Card>
    </div>
    <div v-else-if="type === 'pokemon'">
        <div class="bg-white dark:bg-dark-theme pt-6 px-6 w-96 my-6 shadow-md rounded-lg">
            <div class="relative">
                <div class="items-center text-center mb-8">
                    <div class="h-4 rounded-full w-full bg-green-400 animate-pulse" />
                </div>


                <div class="flex text-sm mt-8 gap-3 dark:text-white">
                    <div class="h-4 rounded-full w-full bg-blue-400 animate-pulse" />
                    <div class="h-4 rounded-full w-full bg-red-500 animate-pulse" />
                </div>
                <div class="flex text-sm mt-8 dark:text-white">
                    <div class="h-4 rounded-full w-full bg-yellow-500 animate-pulse" />
                </div>

                <div class="flex py-8">
                    <div class="h-2 bg-gray-700 w-full rounded animate-pulse"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
    props: {
        type: {
            type: String,
            required: true
        }
    }
})
</script>

<style scoped>

</style>
