import webpack, {RuleSetRule} from "webpack"
import path from "path"
import {buildCssLoader,buildSvgLoader} from "../build/loaders/buildLoaders"



export default ({config}: {config: webpack.Configuration}) => {
  const module = config.module
  config.resolve?.modules?.push(path.resolve(__dirname, "../../src"))
  config.resolve?.extensions?.push(".ts", ".tsx")
  if(module && module.rules){
    module.rules = module.rules.map((rule) => {
      if(rule && typeof rule === "object" && /svg/.test(rule.test as string) ){
        return {...rule, exclude: /\.svg$/i}
      }
      return rule
    })
    module.rules.push(buildCssLoader(true))
    module.rules.push(buildSvgLoader())
  }
  return config
};