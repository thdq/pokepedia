<template>
    <div class="mq-max-md:hidden">
        <Sidebar>
            <template #title>
                <router-link to="/">
                    <h1 class="font-bangers"> PokePedia </h1>
                </router-link>
            </template>
            <template #content>
                <ul class="flex flex-col py-4 space-y-1">
                    <SidedarItem isGroup>
                        <div class="text-sm font-light tracking-wide text-gray-500">
                            {{ t('layout.components.sidebar-item.labels.menu') }}
                        </div>
                    </SidedarItem>
                    <SidedarItem>
                        <router-link class="w-full flex items-center" to="/generations">
                            <span class="icon inline-flex justify-center items-center ml-4 bg-white rounded-full p-1">
                                <img src="../assets/images/iconfinder.svg" class="w-5 h-5" />
                            </span>
                            <span class="ml-2 text-sm tracking-wide truncate">
                                {{ t('layout.components.sidebar-item.labels.generations') }}
                            </span>
                        </router-link>
                    </SidedarItem>
                    <SidedarItem>
                        <router-link class="w-full flex items-center" to="/pokedex">
                            <span class="icon inline-flex justify-center items-center ml-4 bg-white rounded-full p-1">
                                <img src="../assets/images/pokedex.svg" class="w-5 h-5" />
                            </span>
                            <span class="ml-2 text-sm tracking-wide truncate">
                                {{ t('layout.components.sidebar-item.labels.pokedex') }}
                            </span>
                        </router-link>
                    </SidedarItem>
                </ul>
            </template>
            <template #footer>
                <ul class="flex flex-col py-4 space-y-1">
                    <li class="footer-li">
                        <label for="toogleButton" class="flex items-center cursor-pointer place-content-center">
                            <div class="px-2 dark:text-white">
                                {{ t('layout.components.sidebar-item.labels.dark-mode') }}
                            </div>

                            <div class="relative">
                                <input id="toogleButton" type="checkbox" v-model="isChecked" @change="setTheme(isChecked)" class="hidden" />
                                <div class="toggle-path bg-gray-200 dark:bg-gray-700 w-9 h-5 rounded-full shadow-inner"></div>
                                <div class="toggle-circle absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0 left-0"></div>
                            </div>
                        </label>
                    </li>
                </ul>
            </template>
        </Sidebar>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import Sidebar from '../components/base/sidebar/sidebar.vue'
import SidedarItem from '../components/base/sidebar-item/sidebar-item.vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
    name: 'Master',
    components: {
        Sidebar,
        SidedarItem
    },
    setup() {
        const { t } = useI18n()
        const isChecked = ref<boolean>(false)

        onMounted(() => {

            const theme = localStorage.getItem("theme")

            if(theme == 'dark') {
                isChecked.value = true
            }

            setTheme(isChecked.value)


        })

        const setTheme = (checked: boolean): void => {

            if(checked) {
                localStorage.setItem("theme", "dark")
                document.documentElement.classList.add('dark')
            } else {
                localStorage.removeItem("theme")
                document.documentElement.classList.remove('dark')
            }

        }

        return {
            setTheme,
            isChecked,
            t
        }

    }
})
</script>

<style scoped>


.toggle-path {
    transition: background 0.3s ease-in-out;
}
.toggle-circle {
    top: 0.2rem;
    left: 0.25rem;
    transition: all 0.2s ease-in-out;
}
input:checked ~ .toggle-circle {
    transform: translateX(100%);
}
input:checked ~ .toggle-path {
    @apply bg-primary;
}


</style>
