import { LangProvider } from "@/features/lang";
import { ThemeProvider } from "@/features/theme";
import { AntdConfigProvider, AntdAppProvider } from "@/features/antd";
import { LazyAnimate } from "./features/animate";

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
  )
}

export default App;
