<template>
    <div data-testid="timeline-item" class="flex justify-between items-center w-full" :class="positionClass">
        <div class="order-1 w-5/12"></div>
        <div class="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <img src="/src/assets/images/pokeball.svg" />
        </div>
        <div class="order-1 w-5/12">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
    name: 'TimelineItem',
    props: {
        position: {
            type: String,
            default: "left"
        }
    },

    setup (props) {

        const positionClass = computed(() => {
            return props.position === "left"? "flex-row-reverse" : ""
        })


        return {
            positionClass
        }
    }
})
</script>

<style scoped>

</style>
