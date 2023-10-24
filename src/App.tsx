import classes from "./styles/style.module.scss"
import "./styles/index.scss"
import {Link, Route, Routes} from "react-router-dom"
import AboutPage from "./pages/AboutPage/AboutPage"
import MainPage from "./pages/MainPage/MainPage"
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async"
import {Suspense} from "react"


export function App() {

  return <div className={"app"}>
    <Link to={"/"}>Main</Link>
    <Link to={"/about"}>About</Link>
    <Suspense fallback={<div>...Load</div>}>
      <Routes>
        <Route path={"/about"} element={<AboutPageAsync/>}/>
        <Route path={"/"} element={<MainPage/>}/>
      </Routes>
    </Suspense>
  </div>
}

