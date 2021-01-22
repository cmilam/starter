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
        accessToken: "BMQsbl63FDjXsDBv0C0h8cdcwlMpUjS-ep44Lhmj96U",
        spaceId: "6ttsjfhno0pv",
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
