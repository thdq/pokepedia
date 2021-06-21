import { mount, VueWrapper } from '@vue/test-utils'
import Pokemon from "./pokemon.vue"
import { instance } from '../../../services/axiosRegistration'

interface WrapperProps {
    id: number
}

const makeWrapper = (props: WrapperProps = { id: 1 }): VueWrapper<any> => {

    const wrapper = mount(Pokemon, {
        global: {
            provide: {
                $axios: instance
            }
        },
        slots: {
            default: "Default slot"
        },
        props
    })

    return wrapper

}

describe('Pokemon component', () => {

    test('Should set requestStatus equals pending when mounted component', async () => {

        const wrapper = makeWrapper()

        expect(wrapper.vm.requestStatus).toBe(1)

    })

})
