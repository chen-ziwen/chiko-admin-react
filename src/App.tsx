import { AntdAppProvider, AntdConfigProvider } from '@/features/antd';
import { LangProvider } from '@/features/lang';
import { ThemeProvider } from '@/features/theme';

import { LazyAnimate } from './features/animate';

function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <AntdAppProvider>
          <AntdConfigProvider>
            <LazyAnimate>
              <div>66666</div>
            </LazyAnimate>
          </AntdConfigProvider>
        </AntdAppProvider>
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
