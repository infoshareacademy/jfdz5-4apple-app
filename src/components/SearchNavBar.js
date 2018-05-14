import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, FormGroup, NavItem, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import firebase from 'firebase'

import './NavBar.css'
import { filterResults } from '../state/searching'
import { allProductsPass } from "../state/allProducts";
import ButtonBlue from "./ButtonBlue";
import LogoText from "./LogoText";
import { removeDuplicates } from "./_utils/removeDuplicates";
import ReactAutocomplete from 'react-autocomplete'

class SearchNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedName: '',
      searchedProducts: this.props.searchedProducts,
      allProducts: this.props.searchedProducts,
      inputSuggestions: [],
      inputSuggestionsFiltered: []
    };
  }

  componentDidMount() {
    this.props.allProductsPass(this.state.allProducts);
    this.state.allProducts.map(category => category.items)
      .reduce((prevItem, currItem) => prevItem.concat(currItem), []).map(item => {
      return item.brand ?
        this.state.inputSuggestions.push(item.brand, item.model)
        :
        this.state.inputSuggestions.push(item.author, item.title)
    });
    this.parseItemsToObj(this.state.inputSuggestions);

  }

  signOutUser = () => {
    firebase.auth().signOut().then(() => {

    }).catch(error => {
      error(error.message)
    })
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push('/results');
    this.props.addSearchedResults(this.state.searchedProducts, this.state.searchedName);
    this.setState({
      searchedName: '',
    })
  };

  parseItemsToObj = arr => {
    this.setState({
      inputSuggestionsFiltered: removeDuplicates(arr).map((item, index) => {
        return {id: index, label: item}
      })
    })
  };


  render() {
    return (
      <Navbar fixedTop collapseOnSelect className={'nav-bar'}>
        <Navbar.Header>
          <Navbar.Brand className={'nav-bar__logo logo'}>
            <Link to={'/'}><LogoText size={'small'}/></Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <form className="search-form" onSubmit={this.handleSubmit}>
            <FormGroup bsClass={'nav-bar__content'}>
              <div className={'nav-bar__form'}>
                <ReactAutocomplete
                  inputProps={{
                    className: 'nav-bar__input form-control',
                    placeholder: "Znajdź produkt",
                    required: true
                  }}
                  wrapperStyle={{width: '100%'}}
                  menuStyle={{
                    borderRadius: '3px',
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
                    background: '#fff',
                    padding: '5px 10px',
                    fontSize: '90%',
                    position: 'fixed',
                    overflow: 'auto',
                    maxHeight: '20%',
                    zIndex: '1'
                  }}
                  items={this.state.inputSuggestionsFiltered}
                  shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                  getItemValue={item => item.label}
                  renderItem={(item, highlighted) =>
                    <div
                      key={item.id}
                      style={{backgroundColor: highlighted ? '#dce7eb' : 'transparent'}}
                    >
                      {item.label}
                    </div>
                  }
                  value={this.state.searchedName}
                  onChange={e => this.setState({searchedName: e.target.value})}
                  onSelect={searchedName => this.setState({searchedName})}
                />
                <ButtonBlue type="submit"
                            textContent={<i className={'glyphicon glyphicon-search'}/>}
                            helperClass={'search-button'}>
                </ButtonBlue>
              </div>
              <Nav pullRight className={'nav-bar__right'}>
                <LinkContainer to={'/favs'}>
                  <NavItem disabled={true} eventKey={1}>
                    Ulubione
                  </NavItem>
                </LinkContainer>
                <NavItem onClick={this.signOutUser} eventKey={2}>
                  <span style={{whiteSpace: 'nowrap'}}> Wyloguj się</span>
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
