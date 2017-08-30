import React from 'react'

import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap'
import logo from "../img/logo.svg"
import magnifier from "../img/magnifier.png"
import '../components/SearchBar.css'
import Link from "react-router-dom/es/Link"
import searchResults from '../components/SearchingProducts/'

class SearchBar extends React.Component {

  state = {
    searchingItems: ''
  }

  handleChange = (event) => this.setState({
    searchingItems: event.target.value
  })

  render() {
    return (
      <div>
        <Navbar>
          <div className="navbar--contaiter">
            <Navbar.Header>
              <Navbar.Brand>
                <Link to={`/`}><a className="logo"><img src={logo} alt="logo" height="50"/></a></Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Navbar.Form pullLeft>
                <form className="search--form" onSubmit={this.handleSubmit}>
                  <FormGroup >
                    <FormControl type="text"
                                 value={this.state.searchingItems}
                                 onChange={this.handleChange}
                                 placeholder="Znajdź produkt"/>
                  </FormGroup>
                  {' '}
                  <Link to={`/results/list`}>
                    <Button className="search-button" type="submit">
                      <img src={magnifier}
                           alt="search"
                           height="35"/></Button></Link>
                </form>
              </Navbar.Form >
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    )
  }
}

export default SearchBar