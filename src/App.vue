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
    setup() {

        if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        localStorage.theme = 'dark'

    }
})
</script>

<style>

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
