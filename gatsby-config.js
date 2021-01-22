module.exports = {
  siteMetadata: {
    title: "headphones",
  },    
  author: {
    name: `Craig Milam`,
    summary: `#100daysofgatsby`,
  },
  description: `#100daysofgatsby challenge site - audiocore`,
  siteUrl: `https://preview-startermain.gtsb.io`,
  social: {
    twitter: `texasrocker`,
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
