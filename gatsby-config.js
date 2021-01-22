module.exports = {
  siteMetadata: {
    title: "headphones",
  },
  
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "JcqBSD1b8g-o-Rvaovp3hKkuJr82PZX1N6DQYNpwbmM",
        spaceId: "evegefjcr57r",
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
