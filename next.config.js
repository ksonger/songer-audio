/* eslint-disable */
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withStyles = require("@webdeb/next-styles")
const lessToJS = require('less-vars-to-js')
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
const fs = require('fs')
const path = require('path')

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
)

module.exports = withPlugins([withStyles, withMDX, withImages], {

  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables,
  },

  webpack: (config, { isServer }) => {

    withMDX({
      pageExtensions: ["js", "jsx", "md", "mdx"]
    })

    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: "file-loader",
        options: {
          outputPath: '../public/assets/', // if you don't use ../ it will put it inside ".next" folder by default
          publicPath: 'assets/',
        }
      });

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }
    return config
  },
  less: true, // use .less files
  sass: true, // use .scss files
  modules: true, // style.(m|module).css & style.(m|module).scss for module files
  sassLoaderOptions: {
    sassOptions: {
      includePaths: ["styles"], // @import 'variables'; # loads (src/styles/varialbes.scss), you got it..
    },
  },
  cssLoaderOptions: {},
  postcssLoaderOptions: {},
  miniCssExtractOptions: {
    ignoreOrder: true
  }
})
