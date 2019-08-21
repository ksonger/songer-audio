const autoprefixer = require('autoprefixer')
const dotenv = require('dotenv')
const path = require('path')
const postCssDiscardDuplicates = require('postcss-discard-duplicates')
const postCssFlexbugsFixes = require('postcss-flexbugs-fixes')
const postCssFocus = require('postcss-focus')

dotenv.config({
  path: `./.env.${process.env.RELEASE_LEVEL}`,
})

console.log(`Using environment: ${process.env.RELEASE_LEVEL}`)

module.exports = {
  siteMetadata: {
    title: `Songer Audio`,
    siteUrl: 'http://songeraudio.com',
    description: `Maker of finely handcrafted field coil loudspeakers`,
    author: `Ken Songer`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true
      }
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#308FFE",
          "layout-body-background": "transparent",
          "layout-header-background": "transparent",
          "layout-footer-background": "transparent",
          "breadcrumb-link-color": "#308FFE",
          "popover-bg": "#777",
          "popover-color": "#fff",
        }
      }
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
        postCssPlugins: [
          autoprefixer(),
          postCssDiscardDuplicates(),
          postCssFlexbugsFixes(),
          postCssFocus(),
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        constants: path.join(__dirname, 'src/constants'),
        images: path.join(__dirname, 'src/images'),
        models: path.join(__dirname, 'src/models'),
        pages: path.join(__dirname, 'src/pages'),
        services: path.join(__dirname, 'src/services'),
        styles: path.join(__dirname, 'src/styles'),
        templates: path.join(__dirname, 'src/templates'),
        utils: path.join(__dirname, 'src/utils'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `songer-audio-website`,
        short_name: `sa`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/songer_audio_logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
