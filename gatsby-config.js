require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "headphones",
    siteUrl: "https://www.example.com",
  },

  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-image`,
    `gatsby-background-image`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },

    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-formium`,
      options: {
        // Get your projectId from https://dashboard.formium.io
        projectId: process.env.GATSBY_FORMIUM_PROJECTID,
        // Generate a personal access token by going to https://dashboard.formium.io/account#tokens
        accessToken: process.env.FORMIUM_TOKEN,
      },
    },
  ],
};

