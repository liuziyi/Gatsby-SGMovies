import React from "react"
import Link from "gatsby-link"

const ListLink = props =>
  <li>
    <a style={{ textDecoration: 'none', color: 'black' }} href={props.href}>{props.children}</a>
  </li>

const CinemasPage = () => (
  <div>
    <h2 style={{ textAlign: 'center' }}>List of Cinemas</h2>
    <ul>
      <ListLink href="https://www.gv.com.sg/#/">Golden Village</ListLink>
      <ListLink href="http://www.cathaycineplexes.com.sg">Cathay Cineplexes</ListLink>
      <ListLink href="http://www.shaw.sg">Shaw Theatres</ListLink>
      <ListLink href="http://fgcineplex.com.sg">Filmgarde Cineplexes</ListLink>
      <ListLink href="https://wecinemas.com.sg">WE Cinemas</ListLink>
    </ul>
  </div>
)

export default CinemasPage
