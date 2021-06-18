<template>
    <div class="container mx-auto">
        <div class="relative wrap overflow-hidden">
            <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-2/4"></div>
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Timeline',
    setup () {


        return {}
    }
})
</script>

<style scoped>

</style>
