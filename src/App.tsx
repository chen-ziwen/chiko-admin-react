import { LangProvider } from "@/features/lang";
import { ThemeProvider } from "@/features/theme";
function App() {
  return (
    <ThemeProvider>
      <LangProvider>

      </LangProvider>
    </ThemeProvider>
  )
}

export default App
