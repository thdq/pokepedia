import { mount, VueWrapper } from '@vue/test-utils'
import Card from "./card.vue"

const makeWrapper = (): VueWrapper<any> => {

    const wrapper = mount(Card, {
        slots: {
            title: "Any title",
            content: "Any content"
        }
    })

    return wrapper

}

describe('Card base component', () => {

    test('Should contain title slot', () => {

        const wrapper = makeWrapper()

        expect(wrapper.html()).toContain("Any title")

    })

    test('Should contain content slot', () => {

        const wrapper = makeWrapper()

        expect(wrapper.html()).toContain("Any content")

    })

})
