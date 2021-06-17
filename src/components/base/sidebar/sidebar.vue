<template>
    <div>
        <div class="pok-sidebar">
            <div class="pok-sidebar--title">
                <slot name="title" />
            </div>
            <div class="pok-sidebar--content">
                <slot name="content" />
            </div>
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
    @apply fixed flex flex-col top-0 left-0 w-64 bg-white border-white border-2 rounded-3xl my-8 mx-6 shadow-md
}

.pok-sidebar--title {
    @apply flex items-center justify-center h-14
}

.pok-sidebar--content {
    @apply overflow-y-auto overflow-x-hidden flex-grow
}

</style>
