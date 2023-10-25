declare module "*.scss" {
  interface ICassNames {
    [className: string]: string
  }
  const className: ICassNames;
  export = className
}