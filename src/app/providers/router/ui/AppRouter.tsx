import {Route, Routes} from "react-router-dom"
import {AboutPage} from "pages/AboutPage"
import {MainPage} from "pages/MainPage"
import {Suspense} from "react"
import {routeConfig} from "shared/config/routeConfig/routeConfig"


const AppRouter = () => {

  return(
    <Suspense fallback={<div>...Load</div>}>
      <Routes>
        {
          routeConfig.map((routeProps) => <Route {...routeProps}/>)
        }
      </Routes>
    </Suspense>
  )
}

export default AppRouter
