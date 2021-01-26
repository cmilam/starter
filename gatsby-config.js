module.exports = {
  siteMetadata: {
    title: "headphones",
    siteUrl: "www.example.com",
  },

  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "6ttsjfhno0pv",
        accessToken: "BMQsbl63FDjXsDBv0C0h8cdcwlMpUjS-ep44Lhmj96U",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
