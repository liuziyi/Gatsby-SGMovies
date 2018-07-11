const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
  const { createPage } = boundActionCreators

  const movieTemplate = path.resolve('src/pages/templates/movie-details.js');

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              date
              title
              author
            }
          }
        }
      }
    }
  `).then(res => {
    if(res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach( ({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: movieTemplate
      })
    })

  })
}
