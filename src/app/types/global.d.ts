declare module "*.scss" {
  interface ICassNames {
    [className: string]: string
  }

  const className: ICassNames
  export = className
}

declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.svg" {
  import React = require("react")
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  export default ReactComponent
}