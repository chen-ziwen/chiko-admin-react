import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { localStg } from "@/utils/storage";
import locales from "./locales";

export const i18nInstance = i18n.use(initReactI18next);

export async function setupI18n() {
    await i18nInstance.init({
        interpolation: {
            escapeValue: false
        },
        lng: localStg.get('lang') || 'zh-CN',
        resources: locales
    });
}

export const $t = i18nInstance.t;

export function setLang(locale: App.I18n.LangType) {
    i18nInstance.changeLanguage(locale);
}

