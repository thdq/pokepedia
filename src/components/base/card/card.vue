<template>
    <div class="card">
        <div class="card-main">
            <div class="flex flex-col mb-8">
                <slot name="title" />
            </div>
            <div class="card--content">
                <slot name="content" />
            </div>
            <div>
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "Card",
    setup () {


        return {}
    }
})
</script>

<style scoped>

.card {
    @apply bg-white shadow-md rounded-lg overflow-hidden mx-auto dark:bg-dark-theme dark:text-white
}

.card-main {
    @apply py-8 px-8 mt-3
}

</style>
