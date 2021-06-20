import { mount, VueWrapper } from '@vue/test-utils'
import Timeline from "./timeline.vue"

const makeWrapper = (): VueWrapper<any> => {

    const wrapper = mount(Timeline, {
        slots: {
            default: "Default slot"
        }
    })

    return wrapper

}

describe('Timeline base component', () => {

    test('Should contain default slot', () => {

        const wrapper = makeWrapper()

        expect(wrapper.html()).toContain("Default slot")

    })

})
