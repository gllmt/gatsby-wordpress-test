const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require('path')
const slash = require('slash')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allWordpressPost {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      // const postTemplate = path.resolve('./src/templates/post.js')
      // result.data.allWordpressPost.edges.map(post => {
      //   createPage({
      //     path: `/${post.node.slug}/`,
      //     component: slash(postTemplate),
      //     context: {
      //       slug: post.node.slug,
      //       id: post.node.id
      //     }
      //   })
      // })

        // Create Page pages.
        const pageTemplate = path.resolve('./src/templates/post.js')
        // We want to create a detailed page for each
        // page node. We'll just use the Wordpress Slug for the slug.
        // The Page ID is prefixed with 'PAGE_'
        _.each(result.data.allWordpressPost.edges.map(post => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${post.node.slug}/`,
            component: slash(pageTemplate),
            context: {
              slug: post.node.slug,
              id: post.node.id
            },
          })
        }))
      // ==== END PAGES ====
      resolve()
    })
  })
}
