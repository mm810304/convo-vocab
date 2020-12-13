const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: `Convo Vocab`,
    description: `Learn English expressions, idioms, and slang to speak English fluently and naturally and to understand native English speakers easily!`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GOOGLE_TAG_MANAGER_CONTAINER,
        includeInDevelopment: false,
      }
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: `production`,
        token: process.env.SANITY_TOKEN
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Proza Libre\:400,700`,
          `Open Sans\:400,700`
        ],
        display: `swap`
      }
    },
  ],
}
