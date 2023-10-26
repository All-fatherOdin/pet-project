import "./styles/index.scss"
import {classNames} from "helpers/classNames/classNames"
import {useTheme} from "app/providers/ThemeProvider"
import {AppRouter} from "app/providers/router"
import {Navbar} from "widgets/Navbar"


export function App() {
  const {theme} = useTheme()
  return (
    <div className={classNames("app",{},[theme])}>
      <Navbar/>
      <AppRouter/>
    </div>
  )
}

