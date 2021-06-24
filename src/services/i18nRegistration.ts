import { App } from "vue"
import { createI18n } from "vue-i18n"
import EN_US from "../locales/en-US.js"
import PT_BR from "../locales/pt-BR.js"

export default (app: App): void => {

    const i18n = createI18n({
        legacy: false,
        locale: navigator.language,
        globalInjection: true,
        fallbackLocale: "en-US",
        messages: {
            "en-US": EN_US,
            "pt-BR": PT_BR
        }
    })

    app.use(i18n)

}

