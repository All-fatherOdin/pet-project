import "./styles/index.scss"
import {Link, Route, Routes} from "react-router-dom"
import MainPage from "./pages/MainPage/MainPage"
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async"
import {Suspense, useContext} from "react"
import {ThemeContext} from "./theme/ThemeContext"
import {useTheme} from "./theme/useTheme"
import {classNames} from "./helpers/classNames/classNames"


export function App() {
  const {theme,toggleTheme} = useTheme()
  return (
    <div className={classNames("app",{},[theme])}>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<div>...Load</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync/>}/>
          <Route path={"/"} element={<MainPage/>}/>
        </Routes>
      </Suspense>
      <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  )
}

