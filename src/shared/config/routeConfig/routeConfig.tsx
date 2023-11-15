import {MainPage} from "pages/MainPage"
import {AboutPage} from "pages/AboutPage"
import {Page404} from "pages/Page404"

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  NOT_FOUND = "not_found"
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.NOT_FOUND]: "*"
}

export const routeConfig = [
  {
    path: RoutePath.main,
    element: <MainPage/>
  },
  {
    path: RoutePath.about,
    element: <AboutPage/>
  },
  {
    path: RoutePath.not_found,
    element: <Page404/>
  }
]
