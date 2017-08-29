import React from 'react'

import {ListGroupItem, ListGroup, Button} from "react-bootstrap";
import searchResults from './SearchingProducts'
import '../components/SearchResultsList.css'

const SearchResultsList = () => (
  <div className="container products--container">
    <ListGroup>{
      searchResults.map(function (product) {
        return <ListGroupItem >
          <div className="product--container">
            <img className="product--img" alt="product" src={product.image}/>
            <div className="product--info">
              <div className="product--description">
                <div className="product--name">
                  <h2>{product.brand} {product.model} {product.author} {product.title} </h2>
                </div>
                <div className="product--details">
                  <p>{product.description}</p>
                  <div>
                    <h4>{product.color ? ("Kolor: " + product.color) : null} </h4>
                    <h4>{product.pages ? ("Ilość stron: " + product.pages) : null} </h4>
                    <h4>{product.size ? ("Rozmiar: " + product.size) : null} {}</h4>
                  </div>
                </div>
              </div>
              <div className="product--price">
                <h3>od: <span className="price">{(product.price).toFixed(2)} zł</span></h3>
                <Button bsSize="large" bsStyle="primary"
                        className="button--continue">Porównaj</Button>
                <h6>w {"*quantity*"} sklepach</h6>
              </div>
            </div>
          </div>
        </ListGroupItem >
      })
    }
    </ListGroup>
  </div>
);

export default SearchResultsList