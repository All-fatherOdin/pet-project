import React from "react"
import {classNames} from "shared/lib/classNames/classNames"
import "./Button.scss"
import {type ButtonProps} from "../types/ButtonTypes"

export function Button ({className, children, fullWidth, color, variant, ...otherProps}: ButtonProps) {
  return (
    <button className={classNames(
      "Button",
      {fullWidth: !!fullWidth},
      [variant, color, className])}
            {...otherProps}
    >
      {children}
    </button>
  )
}
