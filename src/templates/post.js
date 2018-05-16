import React from 'react'

const Post = ({ data }) => {
  const { title, content, date } = data.wordpressPost
  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: content}} />
    </div>
  )
}

export default Post

export const postQuery = graphql`
  query postQuery($id: String!){
    wordpressPost(id: {eq: $id}) {
      title
      content
      date(formatString: "DD/MM/YYYY")
    }
  }
`