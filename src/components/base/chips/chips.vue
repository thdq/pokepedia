<template>
    <div class="mb-3 mt-1 flex flex-wrap -m-1">
        <span v-for="(item, i) in limitedItems" :key="i" class="pok-chips">
            {{ item[label] }}
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
    props: {
        limit: {
            type: Number,
            required: false,
            default: 0
        },
        label: {
            type: String,
            default: 'name'
        },
        items: {
            type: Array,
            required: true
        }
    },
    setup (props) {


        const limitedItems = computed(() => {

            let propsList: any[] = Object.assign([], props.items).splice(0, props.limit)

            const remainingCount = Object.assign([], props.items).splice(props.limit).length


            if(propsList.length == 0){

                propsList.push({
                    name: `---`
                })

            } else if (props.items.length >= props.limit && remainingCount > 0) {

                propsList.push({
                    name: `+${remainingCount}`
                })

            }

            return propsList
        })


        return {
            limitedItems
        }
    }
})
</script>

<style scoped>

.pok-chips {
    @apply m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-default
}

</style>
