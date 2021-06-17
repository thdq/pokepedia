import { App } from "vue";
import Card from '../components/base/card/card.vue'
import Skeleton from '../components/base/skeleton/skeleton.vue'

export default (app: App): void => {

    app.component("Card", Card)
    app.component("Skeleton", Skeleton)

}
