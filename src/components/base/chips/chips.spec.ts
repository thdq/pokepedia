import { mount, VueWrapper } from '@vue/test-utils'
import Chips from "./chips.vue"

interface WrapperProps {
    limit: number
    label: string
    items: any[]
}

const makeWrapper = (props: WrapperProps): VueWrapper<any> => {

    const wrapper = mount(Chips, {
        props
    })

    return wrapper

}

describe('Chips base component', () => {

    test('Should receive props', () => {

        const wrapper = makeWrapper({
            items: [
                {
                    name: "example"
                }
            ],
            label: "name",
            limit: 5
        })

        const props = wrapper.props() as WrapperProps

        expect(props).toEqual({
            items: [
                {
                    name: "example"
                }
            ],
            label: "name",
            limit: 5
        })

    })

    test("Should compute limited items", async () => {

        const items = new Array(10).fill({
            name: "example"
        })

        const wrapper = makeWrapper({
            items,
            label: "name",
            limit: 5
        })

        expect(wrapper.vm.limitedItems.length).toBe(6)


    })

})
