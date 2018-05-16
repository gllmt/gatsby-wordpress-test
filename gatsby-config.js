module.exports = {
  siteMetadata: {
    title: 'Gatsby + wordpress',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
         * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
         * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
         */
        baseUrl: "wpgtby.wordpress.com",
        // The protocol. This can be http or https.
        protocol: "https",
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: true,
        // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
        // This feature is untested for sites hosted on Wordpress.com.
        // Defaults to true.
        useACF: false,
        verboseOutput: true,
        auth: {
          // If hostingWPCOM is true then you will need to communicate with wordpress.com API
          // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
          // then add your clientId, clientSecret, username, and password here
          wpcom_app_clientSecret:
            "a5MRwm8MaonHrZBXkDhHbJLYCeXAZFTXzXzPl1Bl5ay0vHVgt6ZNjgx5phkrfPrZ",
          wpcom_app_clientId: "58248",
          wpcom_user: "pierreguillemot@munso.co",
          wpcom_pass: "qT5!b3Nru@bUe^$gV4!fZwP6zd@mw",
        },
      },
    },
  ]
}
