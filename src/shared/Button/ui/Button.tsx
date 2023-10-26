import React, {ButtonHTMLAttributes} from "react"
import {classNames} from "helpers/classNames/classNames"
import classes from "./Button.module.scss"
import {Color} from "shared/config/themeConfig/themeConfig"


export enum ThemeButton {
  OUTLINED = "outlined",
  CONTAINED = "contained",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
  color?: Color
}


export function Button({className, children,color, theme, ...otherProps}: ButtonProps) {

  return (
    <button className={classNames(classes.Button, {}, [className,classes[theme],classes[color]])}{...otherProps}>
      {children}
    </button>
  )
}