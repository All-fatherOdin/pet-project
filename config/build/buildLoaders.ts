import type webpack from "webpack"
import {type BuildOptions} from "./types/config"
import {transform} from "@formatjs/ts-transformer"
import {buildCssLoader, buildSvgLoader} from "./loaders/buildLoaders"

export function buildLoaders ({isDev}: BuildOptions): webpack.RuleSetRule[] {
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    loader: "file-loader"
  }

  const tsLoader = {
    test: /\.tsx?$/,
    use: [{
      loader: "ts-loader",
      options: {
        getCustomTransformers () {
          return {
            before: [
              transform({
                overrideIdFn: "[sha512:contenthash:base64:6]"
              })
            ]
          }
        }
      }
    }],
    exclude: /node_modules/
  }

  const svgLoader = buildSvgLoader()

  const scssLoader = buildCssLoader(isDev)

  const babelLoader = {
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          ["@babel/preset-env"]
        ]
      }
    }
  }
  return [
    babelLoader,
    tsLoader,
    scssLoader,
    fileLoader,
    svgLoader
  ]
}
