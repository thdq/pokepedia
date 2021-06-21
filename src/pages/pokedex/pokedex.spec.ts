import { mount, VueWrapper } from '@vue/test-utils'
import Pokedex from "./pokedex.vue"
import { instance } from '../../services/axiosRegistration'

const makeWrapper = (): VueWrapper<any> => {

    const wrapper = mount(Pokedex, {
        global: {
            provide: {
                $axios: instance
            }
        }
    })

    return wrapper

}

describe('Pokedex page', () => {

    test('Should set requestStatus equals pending when mounted component', async () => {

        const wrapper = makeWrapper()

        expect(wrapper.vm.requestStatus).toBe(1)

    })

})
