import "./styles/index.scss"
import {classNames} from "shared/lib/classNames/classNames"
import {useTheme} from "app/providers/ThemeProvider"
import {AppRouter} from "app/providers/router"
import {Navbar} from "widgets/Navbar"
import {Sidebar} from "widgets/Sidebar"
import {ErrorBoundary} from "app/providers/ErrorBoundary"

export function App () {
  const {theme} = useTheme()
  return (
    <div className={classNames("app", {}, [theme])}>
      <ErrorBoundary>
        <Navbar/>
        <div className={"content-page"}>
          <Sidebar/>
          <AppRouter/>
        </div>
      </ErrorBoundary>
    </div>
  )
}
