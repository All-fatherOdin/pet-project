import {type BuildOptions} from "../config/build/types/config"
import type {Configuration as DevServerConfigurations} from "webpack-dev-server"

export function buildDevServer ({port, paths}: BuildOptions): DevServerConfigurations {
  return {
    port,
    historyApiFallback: true,
    open: true,
    hot: true
  }
}
