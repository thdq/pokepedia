
<template>
    <li>
        <span v-if="page === null" class="pok-page--helper">
            ...
        </span>
        <button
            v-else
            class="pok-page"
            type="button"
            :class="{ 'active': isActive }"
            @click="clickHandler"
        >
            {{ page }}
        </button>
    </li>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';


export default defineComponent({
    name: 'Page',
    props: {
        page: {
            type: Number,
            default: null,
        },
        current: {
            type: Number,
            default: 0,
        },
        activeClass: {
            type: String,
            default: 'bg-primary',
        },
    },
    emits: ['update'],
    setup(props, { emit }) {

            const isActive = computed(() => {
                return props.page === props.current;
            })

        const clickHandler = (): void => {
            emit('update', props.page);
        }

        return {
            isActive,
            clickHandler
        }
    }
});
</script>

<style scoped>

.pok-page {
    @apply flex items-center justify-center w-6 h-6 m-2 text-sm rounded-sm select-none outline-none cursor-pointer box-border
}

.active {
    @apply bg-primary text-white
}

.pok-page--helper {
    @apply text-gray-600
}



</style>
