<template>
    <div>
        <li v-if="isGroup" class="px-5" >
            <div class="flex flex-row items-center h-8">
                <slot />
            </div>
        </li>
        <li v-else>
            <span class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary text-gray-600 hover:text-white rounded-md border-transparent hover:border-primary pr-6">
                <slot />
            </span>
        </li>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        isGroup: {
            type: Boolean,
            required: false,
            default: false
        },
    },
    setup() {
        return {

        };
    },
});
</script>

<style scoped>
</style>
