import React, {type ButtonHTMLAttributes} from "react"
import {classNames} from "shared/lib/classNames/classNames"
import classes from "./Button.module.scss"
import {type Color} from "app/providers/ThemeProvider/index"
import "./Button.scss"

export enum VariantButton {
  OUTLINED = "outlined",
  CONTAINED = "contained",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: VariantButton
  color?: Color
  fullWidth?: boolean
}

export function Button ({className, children, fullWidth, color, variant, ...otherProps}: ButtonProps) {
  return (
    <button className={classNames(classes.Button, {fullWidth: !!fullWidth}, [
      variant,
      color, className])}{...otherProps}>
      {children}
    </button>
  )
}
