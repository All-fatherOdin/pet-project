import {BuildOptions} from "./build/types/config"
import type {Configuration as DevServerConfigurations} from "webpack-dev-server"


export function buildDevServer({port,paths}:BuildOptions):DevServerConfigurations{
  return {
    port,
    historyApiFallback: true,
    // static: {
    //   directory: paths.devServer,
    // },
    open: true
  }
}