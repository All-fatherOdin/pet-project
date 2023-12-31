import React from "react"
import {Theme, useTheme} from "app/providers/ThemeProvider"
import classes from "./ThemeSwitcher.module.scss"
import ThemeIconLight from "shared/assets/icons/themeLight.svg"
import ThemeIconDark from "shared/assets/icons/themeDark.svg"
import {Button} from "shared/ui/Button"
import {classNames} from "shared/lib/classNames/classNames"

interface ThemeSwitcherProps {
  className?: string
}

export function ThemeSwitcher ({className}: ThemeSwitcherProps) {
  const {toggleTheme, theme} = useTheme()
  return (
    <Button onClick={toggleTheme}
            className={classNames(classes.ThemeSwitcher, {}, [className])}>
      {theme === Theme.LIGHT ?
        <ThemeIconDark/> :
        <ThemeIconLight/>
      }
    </Button>
  )
}
