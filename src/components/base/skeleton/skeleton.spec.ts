import { mount, VueWrapper } from '@vue/test-utils'
import Skeleton from "./skeleton.vue"

interface WrapperProps {
    type: string
}

const makeWrapper = (props: WrapperProps = { type: "card" }): VueWrapper<any> => {

    const wrapper = mount(Skeleton, {
        props
    })

    return wrapper

}

describe('Skeleton base component', () => {

    test('Should show card skeleton when type is card', () => {

        const wrapper = makeWrapper()

        const cardSkeletonEl = wrapper.find("[data-testid='type-card']")

        expect(cardSkeletonEl.exists()).toBe(true)
        expect(cardSkeletonEl.isVisible()).toBe(true)

    })


})
