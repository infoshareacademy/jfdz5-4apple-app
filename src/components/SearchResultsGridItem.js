import React from 'react'

import { Link } from 'react-router-dom'
import { Thumbnail } from "react-bootstrap";

import ButtonBlue from "./ButtonBlue";
import './SearchResultsGrid.css'

const SearchResultsGridItem = ({searchResults}) => {
  return (
    <div className="thumbnail--container">
      {searchResults.map((product, index) => {
        return (
          <Thumbnail key={index} className="thumbnail--cell">
            <img className="thumbnail--img" src={product.image} alt={product.model || product.title}/>
            <div className="thumbnail--info">
              <div className="product__description">
                <div className="thumbnail--name">
                  <h3
                    className="thumbnail--name-details">{product.brand} {product.model} {product.author} {product.title} </h3>
                </div>
              </div>
              <div className="thumbnail--price-item">
                <h3 className="thumbnail--price">od:<span
                  className="thumbnail--price">{(product.price).toFixed(2)}</span> zł</h3>
                <Link to={`/results/details/${product.id}`}><ButtonBlue textContent={"Porównaj"}/>
                </Link>
                <h6>w {product.shops.length} sklepach</h6>
              </div>
            </div>

          </Thumbnail>
        )
      })}</div>
  )
}
export default SearchResultsGridItem