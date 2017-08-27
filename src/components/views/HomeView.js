import React from 'react'

import {Button} from 'react-bootstrap'
import ProductsList from "../SearchResultsList";
import searchResults from '../_utils/searchingProducts'
import {ListGroupItem, ListGroup} from "react-bootstrap";
import SearchBar from '../SearchBar'

const HomeView = () => (
    <div>
        <SearchBar/>
        <div className="container products--container">
            <ListGroup>{
                searchResults.map(function (product) {
                    return <ListGroupItem >
                        <div className="product--container">
                            <img className="product--img" src={product.image}/>
                            <div className="product--info">
                                <div className="product--description">
                                    <div className="product--name">
                                        <h2>{product.brand + " " + product.model}</h2>
                                    </div>
                                    <div className="product--details">
                                        {product.description}
                                        <div>
                                            <h4>Kolor: {product.color}</h4>
                                            <h4>Rozmiar: {product.size}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="product--price">
                                    <h3 className="price">od: <span className="price--currency"><span
                                        className="price">{(product.price).toFixed(2)}</span> zł</span></h3>
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
    </div>
)


export default HomeView

