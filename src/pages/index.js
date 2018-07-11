import React from "react"
import Link from "gatsby-link"

const IndexPage = ({data}) => (
  <div>
    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Now Showing</h2>
    {data.allMarkdownRemark.edges.map( ({node}) => (
      <div key={node.id} className="row">
        <h3>{node.frontmatter.title} - <span style={{ color: '#BBB' }}>{node.frontmatter.date}</span></h3>
        <Link style={{ textDecoration: 'none', color: 'black' }} to={node.frontmatter.path}>
          Details
        </Link>
        <hr style={{ marginTop: '1rem' }}/>
      </div>
    ))}
  </div>
)

export const moviesQuery = graphql`
  query movieIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
            title
            author
          }
        }
      }
    }
  }
`

export default IndexPage
