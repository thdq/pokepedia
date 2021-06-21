import { App } from "vue";
import { createHead } from '@vueuse/head'


export default (app: App): void => {

    const head = createHead()
    app.use(head)

}
