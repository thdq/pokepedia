<template>
    <div>
        <div class="overflow-x-auto">
            <div class="w-full">
                <div class="pok-table--container">
                    <table cellspacing="0" cellpadding="0" class="pok-table">
                        <thead class="pok-table--head">
                            <tr>
                                <th data-testid="columns" class="py-3 px-6 text-left" v-for="(col, i) in columns" :key="i" >
                                    {{ col.label }}
                                </th>
                            </tr>
                        </thead>
                        <tbody class="pok-table--body">
                            <tr data-testid="rows" v-for="(row, i) in computedData" :key="i">
                                <td v-for="(col, j) in columns" :key="j">
                                    <div class="flex items-center">
                                        <span class="font-medium">{{ row[col.key] }}</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="pok-table--pagination" v-if="data.length > itemsPerPage">
                        <div class="my-3">
                            <Pagination v-model="currentPage" :pages="totalPages" @update:modelValue="updateContent" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import Pagination from './pagination-table/pagination-table.vue'

interface ColumnsProps {
    key: string
    label: string
}

export default defineComponent({
    name: "Table",
    components: {
        Pagination
    },
    props: {
        data: {
            type: Array,
            required: false,
            default: () => ([])
        },
        columns: {
            type: Array as PropType<ColumnsProps[]>,
            required: false,
            default: () => ([])
        },
        itemsPerPage: {
            type: Number,
            required: false,
            default: 15
        }
    },
    setup (props) {

        const totalPages = computed(() => {
            return Math.ceil(props.data.length / props.itemsPerPage)
        })

        const computedData = computed(() => {

            const data = props.data

            const startAt = (currentPage.value-1) * props.itemsPerPage
            const endAt = (currentPage.value-1) * props.itemsPerPage + props.itemsPerPage

            return Object.assign([], data.slice(startAt, endAt))
        })

        const currentPage = ref<number>(1)

        const updateContent = (page: number | undefined): void => {

            currentPage.value = page ?? 0
        }

        return {
            computedData,
            currentPage,
            totalPages,
            updateContent
        }
    }
})
</script>

<style scoped>

.pok-table {
    @apply min-w-max w-full border-none border-separate
}

.pok-table--container {
    @apply bg-white rounded-sm border-l-2 border-r-2 border-b-2 border-gray-100
}

.pok-table--head tr {
    @apply bg-gray-100 text-gray-600 text-sm leading-normal
}

.pok-table--body {
    @apply text-gray-600 text-sm font-light
}

.pok-table--body tr {
    @apply border-b border-gray-200 hover:bg-gray-50
}

.pok-table--body tr td {
    @apply py-3 px-6 text-left whitespace-nowrap
}

.pok-table--pagination {
    @apply border-t-2 border-gray-100
}


</style>
