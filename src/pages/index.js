import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  const posts = data.allWordpressPost.edges
  return (
    <div>
      <h1>Blog</h1>
      <p>Voici la liste des articles sur wordpress :</p>
      {
        posts.map(post => (
          <Link key={post.node.id} to={`/${post.node.slug}/`}>
          <h1 key={post.node.id} >{post.node.title}</h1>
          </Link>
        ))
      }
    </div>
  )
}

export default IndexPage

export const indexQuery = graphql `
  query indexQuery {
    allWordpressPost {
      edges {
        node {
          id
          title
          date
          slug
        }
      }
    }
  }
`