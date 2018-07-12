import React from "react";

class MovieTemplate extends React.Component {
  render() {
    const movie = this.props.data.markdownRemark;

    return (
      <div>
        <h1>{movie.frontmatter.title}</h1>
        <p>Release: {movie.frontmatter.date}</p>
        <p>Director: {movie.frontmatter.author}</p>
        <hr/>
        <div dangerouslySetInnerHTML={{ __html: movie.html }} />
        <button
          style={{
            backgroundColor: 'black',
            border: 'none',
            width: '600px',
            height: '50px',
            borderRadius: '5px'
           }}
         >
          <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.gv.com.sg/GVHome#/">
            Book
          </a>
        </button>
      </div>
    );
  }
}

export default MovieTemplate;

export const movieQuery = graphql`
  query MovieByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date(formatString: "DD MMMM, YYYY")
        title
        author
      }
    }
  }
`;
