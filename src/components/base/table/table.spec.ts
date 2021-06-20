import { mount, VueWrapper } from '@vue/test-utils'
import Table from "./table.vue"

interface WrapperProps {
    data: any[],
    columns: any[],
    itemsPerPage: number
}

const makeWrapper = (props: WrapperProps): VueWrapper<any> => {

    const wrapper = mount(Table, {
        props
    })

    return wrapper

}

describe('Table base component', () => {

    test('Should compute totalPages based on props', () => {

        const data = new Array(10).fill({
            name: "example"
        })

        const wrapper = makeWrapper({
            columns: [],
            data,
            itemsPerPage: 5
        })

        expect(wrapper.vm.totalPages).toBe(2)

    })

    test('Should compute computedData based on props', () => {

        const data = new Array(10).fill({
            name: "example"
        })

        const wrapper = makeWrapper({
            columns: [],
            data,
            itemsPerPage: 5
        })

        expect(wrapper.vm.computedData.length).toBe(5)

    })

    test('Should show columns length based on columns props', () => {

        const data = new Array(10).fill({
            name: "example"
        })

        const columns = new Array(3).fill({
            name: "example"
        })

        const wrapper = makeWrapper({
            columns,
            data,
            itemsPerPage: 5
        })

        const columnsEl = wrapper.findAll("[data-testid='columns']")

        expect(columnsEl.length).toBe(3)

    })

})
