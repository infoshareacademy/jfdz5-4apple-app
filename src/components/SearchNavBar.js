import React from 'react'
import { withRouter } from 'react-router-dom'
import firebase from 'firebase'
import { LinkContainer } from 'react-router-bootstrap'
import LogoText from "./LogoText";
import { Navbar, FormGroup, FormControl, Button, NavItem, Nav } from 'react-bootstrap'
import '../components/SearchBar.css'
import Link from "react-router-dom/es/Link"
import { connect } from 'react-redux'
import { filterResults } from '../state/searching'
import { allProductsPass } from "../state/allProducts";
import './NavBar.css'
import ButtonBlue from "./ButtonBlue";

class SearchNavBar extends React.Component {

  componentDidMount() {
    this.props.allProductsPass(this.state.allProducts)
  }

  state = {
    searchedName: '',
    searchedProducts: this.props.searchedProducts,
    allProducts: this.props.searchedProducts
  }

  signOutUser = () => {
    firebase.auth().signOut().then(() => {

    }).catch(error => {
      error(error.message)
    })
  }

  handleChange = (event) => this.setState({
    searchedName: event.target.value
  })

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push('/results')
    this.props.addSearchedResults(this.state.searchedProducts, this.state.searchedName)
    this.setState({
      searchedName: '',
    })
  }

  render() {
    return (
      <Navbar fixedTop collapseOnSelect className={'nav-bar'}>
        <Navbar.Header>
          <Navbar.Brand className={'nav-bar__logo logo'}>
            <a href="#"><LogoText size={'small'}/></a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <form className="search-form" onSubmit={this.handleSubmit}>
            <FormGroup bsClass={'nav-bar__content'}>
              <div className={'nav-bar__form'}>
                <FormControl className="nav-bar__input"
                             type="text"
                             value={this.state.searchedName}
                             onChange={this.handleChange}
                             required
                             placeholder="Znajdź produkt"/>
                <ButtonBlue type="submit"
                            textContent={<i className={'glyphicon glyphicon-search'}/>}
                            helperClass={'search-button'}>
                </ButtonBlue>
              </div>
              <Nav pullRight className={'nav-bar__right'}>
                <LinkContainer to={'/favs'}>
                  <NavItem eventKey={1}>
                    Ulubione
                  </NavItem>
                </LinkContainer>
                <NavItem onClick={this.signOutUser} eventKey={2}>
                  Wyloguj<span style={{color: 'transparent'}}>_</span>się
                </NavItem>
              </Nav>
            </FormGroup>
          </form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default withRouter(
  connect(
    state => ({
      filteredResults: state.searching.searchedProducts,
      allProducts: state.allProducts.data
    }),
    dispatch => ({
      addSearchedResults: (searchedProducts, searchedItem) => dispatch(filterResults(searchedProducts, searchedItem)),
      allProductsPass: (data) => dispatch(allProductsPass(data))
    })
  )(SearchNavBar)
)
