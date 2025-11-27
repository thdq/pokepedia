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
    }
})
</script>

<style>
.pok-sidebar {
    @apply my-8 w-full px-6
}

#app {
    @apply flex flex-1
}

.pok-main {
    @apply my-8 w-full px-6
}

body {
    @apply dark:bg-black
}

</style>
