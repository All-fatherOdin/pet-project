import {App} from "app/App"
import {BrowserRouter} from "react-router-dom"
import {ThemeProvider} from "app/providers/ThemeProvider"
import {createRoot} from "react-dom/client"
import {LocalesProvider} from "app/providers/LocalesProvider"
import {ErrorBoundary} from "app/providers/ErrorBoundary"

const container = document.getElementById("root")

const root = createRoot(container as HTMLElement)
root.render(
  <BrowserRouter>
    <LocalesProvider>
      <ThemeProvider>
        <ErrorBoundary>
          <App/>
        </ErrorBoundary>
      </ThemeProvider>
    </LocalesProvider>
  </BrowserRouter>
)
