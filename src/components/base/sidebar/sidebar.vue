<template>
    <div class="pok-sidebar">
        <div class="pok-sidebar--title">
            <slot name="title" />
        </div>
        <div class="pok-sidebar--content">
            <slot name="content" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    setup() {

        return {

        }

    },
});
</script>

<style scoped>

.pok-sidebar {
    height: 90vh;
    @apply flex sticky flex-col top-8 left-0 w-64 bg-white border-white border-2 rounded-2xl my-8 mx-6 shadow-md float-left
}

.pok-sidebar--title {
    @apply flex items-center tracking-wide justify-center h-14 text-5xl text-transparent bg-clip-text bg-gradient-to-bl from-secondary to-primary
}

.pok-sidebar--content {
    @apply overflow-y-auto overflow-x-hidden flex-grow
}

</style>
