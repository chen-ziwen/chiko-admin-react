import { createContext, useContext } from "react";
import { localStg } from "@/utils/storage";

export type LangContextType = {
    locale: App.I18n.LangType;
    localeOptions: App.I18n.LangOption[];
    setLocale: (locale: App.I18n.LangType) => void;
};

// 语言选项
export const localeOptions:LangContextType["localeOptions"] = [
    {
        key: 'zh-CN',
        label: '中文'
    },
    {
        key: 'en-US',
        label: 'English'
    }
];

// 创建一个上下文对象
export const LangContext = createContext<LangContextType>({
    locale: localStg.get('lang') || 'zh-CN',
    localeOptions: localeOptions,
    setLocale: () => { }
});

//  使用上下文
export function useLang() {
    const context = useContext(LangContext);

    if (!context) {
        throw new Error('useLang must be used within a LangProvider');
    }

    return context;
}