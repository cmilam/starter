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
    `gatsby-source-filesystem`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "6ttsjfhno0pv",
        accessToken: "BMQsbl63FDjXsDBv0C0h8cdcwlMpUjS-ep44Lhmj96U",
      },

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

