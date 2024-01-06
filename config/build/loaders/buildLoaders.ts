import MiniCssExtractPlugin from "mini-css-extract-plugin"

export function buildCssLoader (isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes(".module."),
            localIdentName: isDev ?
              "[local]--[hash:base64:8]" :
              "[hash:base64:8]"
          }
        }
      },
      "sass-loader"
    ]
  }
}

export function buildSvgLoader () {
  return {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"]
  }
}
