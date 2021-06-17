<template>
    <Master />
    <router-view class="pok-main" />
</template>

<script lang="ts">
import Master from './layout/master.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'App',
    components: {
        Master
    },
})
</script>

<style>

#app {
    @apply flex flex-1
}

.pok-main {
    @apply flex flex-1 my-8
}

</style>
