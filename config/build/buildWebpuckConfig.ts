import {BuildOptions} from "./types/config"
import webpack from "webpack"
import path from "path"
import {buildPlugins} from "./buildPlugins"
import {buildLoaders} from "./buildLoaders"
import {buildResolve} from "./buildResolve"
import {buildDevServer} from "../buildDevServer"


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration{
  const {mode,paths,isDev} = options
  const {entry,output} = paths
  return {
    mode,
    entry,
    output: {
      filename: "[name].[contenthash].js",
      path: output,
      clean: true
    },

    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolve(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}