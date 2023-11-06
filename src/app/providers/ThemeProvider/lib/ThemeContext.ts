import {createContext} from "react"
import {Theme} from "shared/config/themeConfig/themeConfig"


export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({theme: Theme.LIGHT})