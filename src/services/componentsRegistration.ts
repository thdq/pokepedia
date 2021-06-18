import { App } from "vue";
import Card from '../components/base/card/card.vue'
import Skeleton from '../components/base/skeleton/skeleton.vue'
import Chips from '../components/base/chips/chips.vue'

export default (app: App): void => {

    app.component("Card", Card)
    app.component("Skeleton", Skeleton)
    app.component("Chips", Chips)

}
