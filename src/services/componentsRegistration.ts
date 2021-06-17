import { App } from "vue";
import Card from '../components/base/card/card.vue'

export default (app: App): void => {

    app.component("Card", Card)

}
