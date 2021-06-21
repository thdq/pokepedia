import { mount, VueWrapper } from '@vue/test-utils'
import Generation from "./generation.vue"
import { instance } from '../../services/axiosRegistration'
import { createRouter, createWebHistory } from 'vue-router';

const mockRouter = createRouter({
    routes: [],
    history: createWebHistory(),
})

const makeWrapper = (param: string | string[] = "1"): VueWrapper<any> => {

    mockRouter.currentRoute.value.params = {
        id: param
    }

    const wrapper = mount(Generation, {
        global: {
            plugins: [
              mockRouter
            ],
            provide: {
                $axios: instance
            }
        }
    })

    return wrapper

}

describe('Generation page', () => {

    test('Should set requestStatus equals pending when mounted component', async () => {

        const wrapper = makeWrapper()

        expect(wrapper.vm.requestStatus).toBe(1)

    })

})
