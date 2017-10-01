import React from 'react'

import {Link} from 'react-router-dom'
import {Thumbnail} from "react-bootstrap";
import firebase from 'firebase'
import {Button} from "react-bootstrap";

import ButtonBlue from "./ButtonBlue";
import './SearchResultsGrid.css'

const SearchResultsGridItem = ({searchResults}) => {
    return (
        <div className="thumbnail--container">
            {searchResults.map((product, index) => {
                return (
                    <Thumbnail key={index} className="thumbnail--cell">
                        <img className="thumbnail--img" src={product.image} alt="242x200"/>
                            <div className="thumbnail--info">
                                <div className="product--description">
                                    <div className="thumbnail--name">
                                        <h3 className="thumbnail--name-details">{product.brand} {product.model} {product.author} {product.title} </h3>
                                    </div>
                                </div>
                                <div className="thumbnail--price-item">
                                    <h3 className="thumbnail--price">od:<span
                                        className="thumbnail--price">{(product.price).toFixed(2)}</span> zł</h3>
                                    <Button bsSize="large"
                                            bsStyle="primary"
                                            className="button--continue"

                                            onClick={
                                              () => {
                                                let productWithAuthor;
                                                let productWithBrand;

                                                if(product.brand || product.model ){
                                                  productWithBrand = `${product.brand} ${product.model}`;
                                                } else if (product.author || product.title) {

                                                  productWithAuthor = `${product.author} ${product.title}`;
                                                }


                                                const userId = firebase.auth().currentUser.uid;
                                                firebase.database().ref(
                                                  '/FavsProducts/' + userId + '/' + product.id
                                                )
                                                  .set(productWithBrand || productWithAuthor)
                                              }}> Dodaj do ulubionych
                                    </Button>
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