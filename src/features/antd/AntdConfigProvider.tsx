import type { WatermarkProps } from 'antd';
import type { PropsWithChildren } from 'react';

// import { themeColors } from "@/features/theme";
import { useLang } from '@/features/lang';
// import { useTheme } from '@/features/theme';
import { antdLocales } from '@/locales/antd';

const WATERMARK_CONFIG = {
  font: {
    fontSize: 16
  },
  height: 136,
  offset: [15, 65],
  rotate: -20,
  width: 255,
  zIndex: 9999
} satisfies WatermarkProps;

// function useAntdTheme() {}

function AntdConfig({ children }: PropsWithChildren) {
  const { locale } = useLang();

  return (
    <AConfigProvider
      button={{ classNames: { icon: 'text-icon align-1px' } }}
      card={{ styles: { body: { flex: 1, overflow: 'hidden', padding: '12px 16px' } } }}
      locale={antdLocales[locale]}
      theme={{}}
    >
      <AWatermark
        className="h-full"
        // content={ } 后续再处理 可以在配置中自定义水印文字
        {...WATERMARK_CONFIG}
      >
        {children}
      </AWatermark>
    </AConfigProvider>
  );
}

export default AntdConfig;
