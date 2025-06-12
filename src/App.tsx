import { LangProvider } from "@/features/lang";
import { ThemeProvider } from "@/features/theme";
import { AntdProvider } from "@/features/antd";

function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <AntdProvider>

        </AntdProvider>
      </LangProvider>
    </ThemeProvider>
  )
}

export default App;
