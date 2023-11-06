import "./styles/index.scss"
import {classNames} from "helpers/classNames/classNames"
import {useTheme} from "app/providers/ThemeProvider"
import {AppRouter} from "app/providers/router"
import {Navbar} from "widgets/Navbar"
import {Sidebar} from "widgets/Sidebar"
import {useLocales} from "app/providers/LocalesProvider"


export function App() {
  const {theme} = useTheme()
  const {} = useLocales()
  return (
    <div className={classNames("app",{},[theme])}>
      <Navbar/>
      <div className={"content-page"}>
        <Sidebar/>
        <AppRouter/>
      </div>
    </div>
  )
}

