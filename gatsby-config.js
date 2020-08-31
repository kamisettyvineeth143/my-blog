module.exports = {
  siteMetadata: {
    title: `Blog by vnth`,
    name: `Vineeth`,
    siteUrl: `https://blogbyvnth.netlify.app/`,
    description: `A personal blog from Vineeth`,
    hero: {
      heading: `Welcome to my world of writings that impact world`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/kamisettyvineeth143`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/wild_thinker007/`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
