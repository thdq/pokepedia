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
