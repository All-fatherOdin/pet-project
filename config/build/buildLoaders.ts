import type webpack from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import {type BuildOptions} from "./types/config"
import {transform} from "@formatjs/ts-transformer"

export function buildLoaders ({isDev}: BuildOptions): webpack.RuleSetRule[] {
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    loader: "file-loader"
  }

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"]
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

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => !!resPath.includes(".module."),
            localIdentName: isDev ?
              "[local]--[hash:base64:8]" :
              "[hash:base64:8]"
          }
        }
      },
      "sass-loader"
    ]
  }

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
