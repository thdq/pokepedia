import { mount, VueWrapper } from '@vue/test-utils'
import SidebarItem from "./sidebar-item.vue"

interface WrapperProps {
    isGroup: boolean
}

const makeWrapper = (props: WrapperProps = { isGroup: false }): VueWrapper<any> => {

    const wrapper = mount(SidebarItem, {
        slots: {
            default: "Default slot",
        },
        props
    })

    return wrapper

}

describe('Sidebar-item base component', () => {

    test('Should contain default slot', () => {

        const wrapper = makeWrapper()

        expect(wrapper.html()).toContain("Default slot")

    })

    test('Should show group content if isGroup props is true', () => {

        const wrapper = makeWrapper({
            isGroup: true
        })

        const isGroupEl = wrapper.find("[data-testid='isgroup']")

        expect(isGroupEl.exists()).toBe(true)
        expect(isGroupEl.isVisible()).toBe(true)



    })

})
