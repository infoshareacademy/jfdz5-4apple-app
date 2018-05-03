import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroupItem } from "react-bootstrap";
import { connect } from 'react-redux'


import ButtonBlue from "./ButtonBlue";
import './SearchResultsList.css'

const SearchResultsListItem = ({searchResults, allProducts}) => {


  return (
    <div>
      {searchResults.map((product, index) => {
        return (
          <ListGroupItem className="product__container" key={index}>
            <img className="product__img" alt={product.model || product.title} src={product.image}/>
            <div className="product__info">
              <div className="product__details">
                <div className="product__name">
                  <h2>{product.brand} {product.model} {product.author} {product.title} </h2>
                </div>
                <div className="product__description">
                  <p>{product.description}</p>
                  <div>
                    <h4>{product.color ? ("Kolor: " + product.color) : null} </h4>
                    <h4>{product.size ? ("Rozmiar: " + product.size) : null} {}</h4>
                    <h4>{product.pagesAmount ? ("Liczba stron: " + product.pagesAmount) : null} </h4>
                    <h4>{product.cover ? ("Okładka: " + product.cover) : null} {}</h4>
                  </div>
                </div>
              </div>
              <div className="product__price">
                <h3 className="price">od: <span className="price--currency"><span
                  className="price">{(product.price).toFixed(2)}</span> zł</span></h3>
                <Link to={`/results/details/${product.id}`}>
                  <ButtonBlue textContent={"Porównaj"}/>
                </Link>
                <h6>w {product.shops.length} sklepach</h6>
              </div>
            </div>
          </ListGroupItem>
        )
      })} </div>
  )
}

export default connect(
  state => ({
    allProducts: state.allProducts.data
  }),
  dispatch => ({})
)(SearchResultsListItem)