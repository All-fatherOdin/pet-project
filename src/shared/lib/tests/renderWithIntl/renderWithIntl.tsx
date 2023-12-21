import {type ReactNode} from "react"
import {IntlProvider} from "react-intl"
import lang from "../../../../../public/lang/lang.json"

export function renderWithIntl (component: ReactNode) {
  return <IntlProvider locale={"ru-RU"} messages={lang["ru-RU"]}>
    {component}
  </IntlProvider>
}
