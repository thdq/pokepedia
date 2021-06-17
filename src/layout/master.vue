<template>
    <div>
        <Sidebar>
            <template #title>
                <h1 class="font-bangers"> PokePedia </h1>
            </template>
            <template #content>
                <ul class="flex flex-col py-4 space-y-1">
                    <SidedarItem isGroup>
                        <div class="text-sm font-light tracking-wide text-gray-500">Menu principal</div>
                    </SidedarItem>
                    <SidedarItem>
                        <router-link class="w-full flex items-center" to="/generations">
                            <span class="icon inline-flex justify-center items-center ml-4 bg-white rounded-full p-1">
                                <img src="../assets/images/iconfinder.svg" class="w-5 h-5" />
                            </span>
                            <span class="ml-2 text-sm tracking-wide truncate">Gerações</span>
                        </router-link>
                    </SidedarItem>
                </ul>
            </template>
        </Sidebar>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from '../components/base/sidebar/sidebar.vue'
import SidedarItem from '../components/base/sidebar-item/sidebar-item.vue'

export default defineComponent({
    name: 'Master',
    components: {
        Sidebar,
        SidedarItem
    },
})
</script>

<style>
</style>
