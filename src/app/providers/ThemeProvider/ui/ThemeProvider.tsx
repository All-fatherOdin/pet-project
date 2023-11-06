import {ThemeContext} from "../lib/ThemeContext"
import React, {type PropsWithChildren, useMemo, useState} from "react"
import {LOCAL_STORAGE_THEME_KEY, Theme} from "shared/config/themeConfig/themeConfig"

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

function ThemeProvider ({children}: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultProps = useMemo(() => ({theme, setTheme}),
    [theme]
  )
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
