import React from 'react'

import {ListGroupItem, ListGroup, Button} from "react-bootstrap";
import {Link} from 'react-router-dom'
import '../components/SearchResultsList.css'
import {connect} from "react-redux";
import {search} from "../state/searching";
import NoItemFound from "./NoItemFound";

class SearchResultsList extends React.Component {

  state = {
    products: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/products.json')
      .then(response => response.json())
      .then(data => this.setState({
        products: data
      }))
  }

  render() {
    const {products} = this.state
    const searchingName = this.props.searchedItems;

    if (this.state.products === null) {
      return (
        <span className="loader"> </span>
      )
    }

    const searchResults = products.map(
      product => product.items
    ).reduce(
      (result, next) => result.concat(next),
      []
    ).filter(
      product => [product.brand, product.model, product.title, product.author].some(
        name => name && name.includes(searchingName)
      )
    )

    return (
      <div className="container products--container">
        <ListGroup>{
          searchResults.toString() === "" ?
            <NoItemFound/>
            :
            searchResults.map(function (product, index) {
              return <ListGroupItem key={index}>
                <div className="product--container">
                  <img className="product--img" alt="product" src={product.image}/>
                  <div className="product--info">
                    <div className="product--description">
                      <div className="product--name">
                        <h2>{product.brand} {product.model} {product.author} {product.title} </h2>
                      </div>
                      <div className="product--details">
                        {product.description}
                        <div>
                          <h4>{product.color ? ("Kolor: " + product.color) : null} </h4>
                          <h4>{product.size ? ("Rozmiar: " + product.size) : null} {}</h4>
                        </div>
                      </div>
                    </div>
                    <div className="product--price">
                      <h3 className="price">od: <span className="price--currency"><span
                        className="price">{(product.price).toFixed(2)}</span> zł</span></h3>
                      <Link to={`/results/details/${index}`}><Button bsSize="large"
                                                                     bsStyle="primary"
                                                                     className="button--continue">Porównaj</Button>
                      </Link>
                      <h6>w {product.shops.length} sklepach</h6>
                    </div>
                  </div>
                </div>
              </ListGroupItem >
            })
        }
        </ListGroup>
      </div>
    )
  }
}

export default
connect(
  state => ({
    searchedItems: state.searching.searchedItems
  }),
  dispatch => ({
    addSearchedItem: searchedItem => dispatch(search(searchedItem))
  })
)(SearchResultsList)
