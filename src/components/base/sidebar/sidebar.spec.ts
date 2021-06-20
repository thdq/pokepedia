import { mount, VueWrapper } from '@vue/test-utils'
import Sidebar from "./sidebar.vue"

const makeWrapper = (): VueWrapper<any> => {

    const wrapper = mount(Sidebar, {
        slots: {
            title: "Any title",
            content: "Any content"
        }
    })

    return wrapper

}

describe('Sidebar base component', () => {

    test('Should contain title slot', () => {

        const wrapper = makeWrapper()

        expect(wrapper.html()).toContain("Any title")

    })

    test('Should contain content slot', () => {

        const wrapper = makeWrapper()

        expect(wrapper.html()).toContain("Any content")

    })

})
