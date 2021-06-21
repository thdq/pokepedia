
<template>
    <ul class="pok-pagination">
        <Page
            v-for="page in pagination"
            :key="`pagination-page-${page}`"
            :page="page"
            :current="modelValue"
            :active-color="activeColor"
            @update="updatePageHandler"
        />
    </ul>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import Page from './page.vue'


export default defineComponent({
    name: 'Pagination',
    components: {
        Page
    },
    props: {
        pages: {
            type: Number,
            default: 0,
        },
        rangeSize: {
            type: Number,
            default: 1,
        },
        modelValue: {
            type: Number,
            default: 0,
        },
        activeColor: {
            type: String,
            default: '#DCEDFF',
        }
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {

        const pagination = computed((): (any)[] => {

            const res = []
            const minPaginationElems = 5 + props.rangeSize * 2

            let rangeStart = props.pages <= minPaginationElems ? 1 : props.modelValue - props.rangeSize
            let rangeEnd = props.pages <= minPaginationElems ? props.pages : props.modelValue + props.rangeSize

            rangeEnd = rangeEnd > props.pages ? props.pages : rangeEnd
            rangeStart = rangeStart < 1 ? 1 : rangeStart

            if (props.pages > minPaginationElems) {

                const isStartBoundaryReached = rangeStart - 1 < 3
                const isEndBoundaryReached = props.pages - rangeEnd < 3

                if (isStartBoundaryReached) {

                    rangeEnd = minPaginationElems - 2

                    for (let i = 1; i < rangeStart; i++) res.push(i)

                } else {

                    res.push(1)
                    res.push(null)

                }

                if (isEndBoundaryReached) {

                    rangeStart = props.pages - (minPaginationElems - 3)

                    for (let i = rangeStart; i <= props.pages; i++) res.push(i)

                } else {

                    for (let i = rangeStart; i <= rangeEnd; i++) res.push(i)

                    res.push(null)
                    res.push(props.pages)

                }

            } else {

                for (let i = rangeStart; i <= rangeEnd; i++) res.push(i)

            }

            return res

        })

        function updatePageHandler(params: number) {
            emit('update:modelValue', params)
        }

        return {
            pagination,
            updatePageHandler
        }
    }
})

</script>

<style scoped >

.pok-pagination {
    @apply flex place-content-center flex-wrap items-center m-0 p-0 list-none
}

</style>
