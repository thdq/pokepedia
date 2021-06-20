import { mount, VueWrapper } from '@vue/test-utils'
import TimelineItem from "./timeline-item.vue"

interface WrapperProps {
    position: string
}

const makeWrapper = (props: WrapperProps = { position: "left" }): VueWrapper<any> => {

    const wrapper = mount(TimelineItem, {
        slots: {
            default: "Default slot"
        },
        props
    })

    return wrapper

}


describe('Timeline-item base component', () => {

    test('Should contain default slot', () => {

        const wrapper = makeWrapper()

        expect(wrapper.html()).toContain("Default slot")

    })

    test('Should set content position based on position props', () => {

        const wrapper = makeWrapper()

        const timelineItemEl = wrapper.find("[data-testid='timeline-item']")

        expect(timelineItemEl.classes()).toContain("flex-row-reverse")

    })

})
