import React from 'react'
import {withRouter} from 'react-router-dom'
import firebase from 'firebase'
import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import logo from "../img/logo.svg"
import magnifier from "../img/magnifier.png"
import '../components/SearchBar.css'
import Link from "react-router-dom/es/Link"
import {connect} from 'react-redux'
import {filterResults} from '../state/searching'
import {allProductsPass} from "../state/allProducts";

class SearchBar extends React.Component {

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
      <div>

        <Navbar className="top--navbar">
          <Navbar.Header>

            <Navbar.Brand className="logo">
              <Link to={`/`}><img src={logo} alt="logo"/></Link>
            </Navbar.Brand>

            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>

            <Navbar.Text pullRight>

            </Navbar.Text>

          </Navbar.Collapse>
          <LinkContainer to="/">
            <Button onClick={this.signOutUser}>Wyloguj się</Button>
          </LinkContainer>
        </Navbar>
        <Navbar>
          <div className="navbar--contaiter">
            <Navbar.Header>

              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse className="collapsedbar">
              <Navbar.Form pullLeft>
                <form className="search--form" onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <FormControl className="search--input"
                                 type="text"
                                 value={this.state.searchedName}
                                 onChange={this.handleChange}
                                 required
                                 placeholder="Znajdź produkt"/>
                  </FormGroup>
                  {' '}

                  <Button className="search-button" type="submit">
                    <img src={magnifier}
                         alt="search"
                         height="35"/></Button>


                </form>
              </Navbar.Form>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
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
  )(SearchBar)
)