import { App } from "vue"
import { createI18n } from "vue-i18n"
import EN_US from "../locales/en-US.js"

export default (app: App): void => {

    const i18n = createI18n({
        legacy: false,
        locale: "en-US",
        globalInjection: true,
        fallbackLocale: "en-US",
        messages: {
            "en-US": EN_US
        }
    })

    app.use(i18n)

}

