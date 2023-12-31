import {ThemeContext} from "../lib/ThemeContext"
import {useContext} from "react"
import {LOCAL_STORAGE_THEME_KEY, Theme} from "shared/config/themeConfig/themeConfig"

export interface useThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme (): useThemeResult {
  const {theme, setTheme} = useContext(ThemeContext)
  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme && setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {theme: theme ?? Theme.LIGHT, toggleTheme}
}
