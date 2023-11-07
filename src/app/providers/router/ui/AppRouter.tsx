import {Route, Routes} from "react-router-dom"
import {Suspense} from "react"
import {routeConfig} from "shared/config/routeConfig/routeConfig"
import {useIntl} from "react-intl"

const AppRouter = () => {
  const intl = useIntl()
  return (
    <Suspense fallback={<div>...{intl.formatMessage({id: "Load"})}</div>}> <Routes>
      {
        routeConfig.map(({path, element}) => (
          <Route
            key={path}
            element={<div className={"page-wrapper"}>
              {element}
            </div>}
            path={path}
          />))
      }
    </Routes> </Suspense>
  )
}

export default AppRouter
