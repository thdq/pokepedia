<template>
    <div ref="scroll" class="loader" v-show="!loaderDisable">
        <slot>
            <svg viewBox="25 25 50 50" class="loader__svg" :style="size">
                <circle cx="50" cy="50" r="20" class="loader__circle" :style="color"></circle>
            </svg>
        </slot>
    </div>
</template>

<script lang="ts">

import { computed, onActivated, onDeactivated, onMounted, onUnmounted, ref } from 'vue'

export default {
    name: 'ScrollLoader',
    props: {
        loaderMethod: {
            type: Function,
            required: true
        },
        loaderDisable: {
            type: Boolean,
            default: false
        },
        loaderDistance: {
            type: Number,
            default: 0
        },
        loaderColor: {
            type: String,
            default: '#CCCCCC'
        },
        loaderSize: {
            type: Number,
            default: 50
        },
        loaderViewport: {
            type: Element,
            default: null
        }
    },
    setup(props){

        const scroll = ref<Element>()

        const size = computed(() => {
            return {
                width: `${props.loaderSize}px`
            }
        })

        const color = computed(() => {
            return props.loaderColor
        })

        const options = computed(() => {
            return {
                root: props.loaderViewport,
                rootMargin: `0px 0px ${props.loaderDistance}px 0px`
            }
        })

        const observer = computed(() => {
            return new IntersectionObserver(([{ isIntersecting }]) => {
                isIntersecting && !props.loaderDisable && props.loaderMethod()
            }, options.value)
        })

        onMounted(() => {

            console.log(scroll)
            observer.value.observe(scroll.value as Element)

        })

        onActivated(() => observer.value.observe(scroll.value as Element))

        onUnmounted(() => observer.value.unobserve(scroll.value as Element))

        onDeactivated(() => observer.value.unobserve(scroll.value as Element))

        return {
            scroll,
            size,
            color,
            options,
            observer
        }


    }
}

</script>

<style lang="scss" scoped>

.loader{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  &__svg {
    transform-origin: center;
    animation: rotate 2s linear infinite;
  }
  &__circle {
    fill: none;
    stroke-width: 3;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
}
</style>
