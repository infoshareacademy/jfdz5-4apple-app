import React from 'react'
import firebase from 'firebase'
import {Link} from 'react-router-dom'
import {ListGroupItem, Button} from "react-bootstrap";
import {connect} from 'react-redux'


import ButtonBlue from "./ButtonBlue";
import './SearchResultsList.css'

const SearchResultsListItem = ({searchResults, allProducts}) => {


    return (
        <div>
            {searchResults.map((product, index) => {
                return (
                    <ListGroupItem key={index}>
                        {/*<Button onClick={handleSaveFavseClick}/>*/}
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
                                            <h4>{product.pages ? ("Liczba stron: " + product.pages) : null} </h4>
                                            <h4>{product.cover ? ("Okładka: " + product.cover) : null} {}</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="product--price">
                                    <h3 className="price">od: <span className="price--currency"><span
                                        className="price">{(product.price).toFixed(2)}</span> zł</span></h3>
                                    <Button bsSize="large"
                                            bsStyle="primary"
                                            className="button--continue"
                                            onClick={
                                                () => {
                                                    let productWithBrand = `${product.model}`;
                                                    const userId = firebase.auth().currentUser.uid;
                                                    console.log(allProducts)

                                                    firebase.database().ref(
                                                        '/FavsProducts/' + userId + '/' + product.id
                                                    )
                                                        .set(productWithBrand)
                                                }}> <i className="fa fa-star-o"/>
                                    </Button>
                                    <Link to={`/results/details/${product.id}`}><a   onClick={
                                        () => {
                                            let productWithBrand = product.image;
                                            const userId = firebase.auth().currentUser.uid;
                                            firebase.database().ref(
                                                '/viewed/' + userId + '/' + product.id
                                            )
                                                .set(productWithBrand)
                                        }}><ButtonBlue textContent={"Porównaj"}/></a>
                                    </Link>

                                    <h6>w {product.shops.length} sklepach</h6>
                                </div>
                            </div>
                        </div>
                    </ListGroupItem>
                )

            })} )</div>
    )
}

export default connect(
    state => ({
        allProducts: state.allProducts.data
    }),
    dispatch => ({})
)(SearchResultsListItem)