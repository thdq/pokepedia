import { mount, VueWrapper } from '@vue/test-utils'
import Generations from "./generations.vue"
import { instance } from '../../services/axiosRegistration'


const makeWrapper = (): VueWrapper<any> => {

    const wrapper = mount(Generations, {
        global: {
            provide: {
                $axios: instance
            }
        }
    })

    return wrapper

}

describe('Generations page', () => {

    test('Should set requestStatus equals pending when mounted component', async () => {

        const wrapper = makeWrapper()

        expect(wrapper.vm.requestStatus).toBe(1)

    })

})
