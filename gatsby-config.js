require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  assetPrefix: `https://cdn.jsdelivr.net/gh/byteyang/blog@gh-pages`,
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Byteyang`,
    // Default title of the page
    siteTitleAlt: `Byteyang's Tech Blog`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Byteyang's Tech Blog`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://byteyang.dev`,
    // Used for SEO
    siteDescription: `Web 全栈开发, GraphQL, React`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@byteyang`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/byteyang`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-cname`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Byteyang's Tech Blog`,
        short_name: `Byteyang's Tech Blog`,
        description: `Web 全栈开发, GraphQL, React`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
