import React from 'react'
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

import LogoText from "./LogoText";
import './NavBar.css'

class NavBar extends React.Component {
  render() {
    return (
      <Navbar fixedTop collapseOnSelect className={'nav-bar'}>
        <Navbar.Header>
          <Navbar.Brand className={'nav-bar__logo'}>
            <Link to={'/'}><LogoText size={'small'}/></Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight className={'nav-bar__right'}>
            <NavItem eventKey={1} href="#">
              Home
            </NavItem>
            <NavItem href="http://www.4apple.jfdz5.is-academy.pl" className="nav-bar__link">
              Landing Page
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar