import { AntdAppProvider, AntdConfigProvider } from '@/features/antd';
import { LangProvider } from '@/features/lang';
import { RouterProvider } from '@/features/router';
import { ThemeProvider } from '@/features/theme';

import { LazyAnimate } from './features/animate';

function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <AntdAppProvider>
          <AntdConfigProvider>
            <LazyAnimate>
              <RouterProvider />
            </LazyAnimate>
          </AntdConfigProvider>
        </AntdAppProvider>
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
