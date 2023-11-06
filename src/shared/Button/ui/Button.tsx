import React, {ButtonHTMLAttributes} from "react"
import {classNames} from "helpers/classNames/classNames"
import classes from "./Button.module.scss"
import {Color} from "app/providers/ThemeProvider/index"


export enum VariantButton {
  OUTLINED = "outlined",
  CONTAINED = "contained",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: VariantButton
  color?: Color
}


export function Button({className, children,color, variant, ...otherProps}: ButtonProps) {

  return (
    <button className={classNames(classes.Button, {}, [
      variant && classes[variant],
      color && classes[color],className])}{...otherProps}>
      {children}
    </button>
  )
}