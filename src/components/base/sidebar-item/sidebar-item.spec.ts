import { mount, VueWrapper } from '@vue/test-utils'
import SidebarItem from "./sidebar-item.vue"

const makeWrapper = (): VueWrapper<any> => {

    const wrapper = mount(SidebarItem, {
        slots: {
            default: "Default slot",
        }
    })

    return wrapper

}

describe('Sidebar-item base component', () => {

    test('Should contain default slot', () => {

        const wrapper = makeWrapper()

        expect(wrapper.html()).toContain("Default slot")

    })

})
