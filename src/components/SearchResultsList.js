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
                  <h2>{product.brand + " " + product.model}</h2>
                </div>
                <div className="product--details">
                  <p>{product.description}</p>
                  <div>
                    <h4>Kolor: {product.color}</h4>
                    <h4>Rozmiar: {product.size}</h4>
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