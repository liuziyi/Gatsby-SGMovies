import React from "react";
import Link from "gatsby-link";
import { Helmet } from "react-helmet";

const ListLink = props =>
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link style={{ textDecoration: 'none', color: 'black' }} to={props.to}>{props.children}</Link>
  </li>

const Layout = ({ children, data }) => (
  <div style={{ margin: '0 auto', maxWidth: 650, padding: '1.25rem 1rem' }}>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous"/>
    </Helmet>
    <header style={{ marginBottom: '1.5rem' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <h3 style={{ display: 'inline' }}>{data.site.siteMetadata.title}</h3>
      </Link>
      <ul style={{ listStyle: 'none', float: 'right' }}>
        <ListLink to="/cinemas/">Cinemas</ListLink>
        <ListLink to="/contacts/">Contacts</ListLink>
      </ul>
    </header>
    <div style={{ padding: '1rem 0', marginBottom: '2rem' }}>
      {children()}
    </div>
    <footer style={{ position: 'fixed', left: '0', bottom: '0', height: 50, width: '100%',
      paddingTop: '1rem', paddingLeft: '1rem' }}>
      Made with <i className="fas fa-heart"></i> by Ziyi
    </footer>
  </div>
)

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Layout
