import React from 'react'

import {Link} from 'react-router-dom'
import {ListGroupItem} from "react-bootstrap";
import firebase from 'firebase'

import ButtonBlue from "./ButtonBlue";
import './SearchResultsList.css'

const SearchResultsListItem = ({searchResults}) => {
    const userId = firebase.auth().currentUser.uid;
    console.log(userId)
    return (
        <div>
            {searchResults.map((product, index) => {
                    return (
                        <ListGroupItem key={index}>
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
                                        <Link to={`/results/details/${product.id}`}>
                                            <ButtonBlue textContent={"Porównaj"}
                                                       //onClick={

                                                        //   () => firebase.database().ref(
                                                        //       '/FavsProducts/' + userId + '/' + "buty" + ':' +"blabla"
                                                        //   )
                                                        //       .set(true)}
                                            />
                                        </Link>
                                        <h6>w {product.shops.length} sklepach</h6>
                                    </div>
                                </div>
                            </div>
                        </ListGroupItem>
                    )
                }
            )
            }
        </div>
    )
}
export default SearchResultsListItem