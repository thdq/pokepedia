import { mount, VueWrapper } from '@vue/test-utils'
import NotFound from "./notfound.vue"
import Card from '../../components/base/card/card.vue'

const makeWrapper = (): VueWrapper<any> => {

    const wrapper = mount(NotFound, {
        global: {
            components: {
                Card
            }
        }
    })

    return wrapper

}

describe('Notfound page', () => {

    test('Should show alert message', () => {

        const wrapper = makeWrapper()

        const alertMessageEl = wrapper.find("[data-testid='alert-message']")

        expect(alertMessageEl.isVisible()).toBe(true)

    })

})
