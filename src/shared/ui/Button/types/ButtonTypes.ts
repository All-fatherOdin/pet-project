import {type ButtonHTMLAttributes} from "react"
import {type Color} from "shared/config/themeConfig/themeConfig"

export enum VariantButton {
  OUTLINED = "outlined",
  CONTAINED = "contained",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  variant?: VariantButton
  color?: Color
  fullWidth?: boolean
}
