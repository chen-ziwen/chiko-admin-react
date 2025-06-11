import { FC, PropsWithChildren, useState } from 'react';
import { setLang } from '@/locales';
import { localStg } from '@/utils/storage';
import { LangContext, localeOptions } from './langContext';

const langProvider: FC<PropsWithChildren> = ({ children }) => {
    const [locale, setLocale] = useState<App.I18n.LangType>(localStg.get('lang') || 'zh-CN');

    function changeLocale(lang: App.I18n.LangType) {
        setLang(lang);

        setLocale(lang);
        localStg.set('lang', lang);
    }

    return <LangContext value={{ locale, localeOptions, setLocale: changeLocale }}>{children}</LangContext>
};

export default langProvider;
