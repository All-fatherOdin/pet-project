import {createContext} from "react"
import {Locales} from "shared/config/localeConfig/localeConfig"


export interface LocalesContextProps {
  setLocale?(locale: Locales):void,
  locale?: Locales
}

export const LocalesContext = createContext<LocalesContextProps>({})

