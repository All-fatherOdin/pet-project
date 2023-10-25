import "./styles/index.scss"
import {Link, Route, Routes} from "react-router-dom"
import {Suspense} from "react"
import {classNames} from "helpers/classNames/classNames"
import {useTheme} from "app/providers/ThemeProvider"
import {AboutPage} from "pages/AboutPage"
import {MainPage} from "pages/MainPage"
import {AppRouter} from "app/providers/router"


export function App() {
  const {theme,toggleTheme} = useTheme()
  return (
    <div className={classNames("app",{},[theme])}>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <AppRouter/>
      <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  )
}

