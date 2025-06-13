// 针对日期主键
import { locale } from 'dayjs';

import 'dayjs/locale/zh-cn';
import 'dayjs/locale/en';
import { localStg } from '@/utils/storage';

export const setDayjsLocale = (lang: App.I18n.LangType = 'zh-CN') => {
  const localMap: Record<App.I18n.LangType, string> = {
    'en-US': 'en',
    'zh-CN': 'zh-cn'
  };

  const local = lang || localStg.get('lang') || 'zh-CN';

  locale(localMap[local]);
};
