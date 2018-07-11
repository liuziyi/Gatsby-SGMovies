import React from "react"
import Link from "gatsby-link"

const TableLink = props =>
  <td>
    <a style={{ textDecoration: 'none', color: 'black' }} href={props.href}>{props.children}</a>
  </td>

const ContactsPage = () => (
  <div>
    <h2 style={{ textAlign: 'center' }}>Contact Details</h2>
    <table>
      <thead>
        <tr>
          <th>Cinema</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableLink href="https://www.gv.com.sg/#/">Golden Village</TableLink>
          <TableLink href="https://www.gv.com.sg/ContactUs#/">https://www.gv.com.sg/ContactUs#/</TableLink>
        </tr>
        <tr>
          <TableLink href="http://www.cathaycineplexes.com.sg">Cathay Cineplexes</TableLink>
          <TableLink href="http://www.cathaycineplexes.com.sg/contact-us/">http://www.cathaycineplexes.com.sg/contact-us/</TableLink>
        </tr>
        <tr>
          <TableLink href="http://www.shaw.sg">Shaw Theatres</TableLink>
          <TableLink href="http://www.shaw.sg/sw_feedback.aspx">http://www.shaw.sg/sw_feedback.aspx</TableLink>
        </tr>
        <tr>
          <TableLink href="http://fgcineplex.com.sg">Filmgarde Cineplexes</TableLink>
          <TableLink href="http://fgcineplex.com.sg/contactus.aspx">http://fgcineplex.com.sg/contactus.aspx</TableLink>
        </tr>
        <tr>
          <TableLink href="https://wecinemas.com.sg">WE Cinemas</TableLink>
          <TableLink href="https://www.wecinemas.com.sg/contactus.aspx">https://www.wecinemas.com.sg/contactus.aspx</TableLink>
        </tr>
      </tbody>
    </table>
  </div>
)

export default ContactsPage
