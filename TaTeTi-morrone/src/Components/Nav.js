import React from 'react'
import { Navbar } from 'react-bootstrap'

export default class Nav extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" className="nav">
        <Navbar.Text>Ta Te Ti con clases </Navbar.Text>
        <Navbar.Text> Flor Morrone</Navbar.Text>
      </Navbar>
    )
  }
}
