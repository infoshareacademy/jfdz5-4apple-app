import React from 'react'
import firebase from 'firebase'
import {Button, ListGroupItem} from 'react-bootstrap'
import allProducts from "../state/allProducts";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import ButtonBlue from "./ButtonBlue";

class FavsProducts extends React.Component {

    state = {
        favProducts: []
    }

    render() {
        const userId = firebase.auth().currentUser.uid;
        const getFavs = () => {
            firebase.database()
                .ref('/FavsProducts/' + userId)
                .once('value')
                .then(
                    snapshot => {
                        ((snapshot.val())) !== null ?
                            document.getElementById('Favs').innerHTML = (Object.entries(snapshot.val())) :
                            document.getElementById('Favs').innerHTML = 'Nie masz jeszcze ulubionych'
                        console.log('smap', snapshot.val(),snapshot.toJSON())
                        console.log(this.props.allProducts)
                        var foo = this.props.allProducts.reduce((sum, arr) => sum.concat(arr), []);
                        foo = foo.reduce((sum, item) => sum.concat(item.items), []);
                        console.log('----- snap', snapshot.val());
                        foo = foo.filter(item => {
                            return snapshot.val().find(i => i === item.brand + ' ' + item.model);
                        }); //  === snapshot.toJSON()[1]);
                        console.log('--------', foo);
                    })

        }
        return (
            <div>
                {getFavs()}
                <p id="Favs">
                    <div>{console.log(this.state.favProducts)}
                        {this.state.favProducts.map((product, index) => {
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
                                                        <h4>{product.pages ? ("Liczba stron: " + product.pages) : null} </h4>
                                                        <h4>{product.cover ? ("Okładka: " + product.cover) : null} {}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product--price">
                                                <h3 className="price">od: <span className="price--currency"><span
                                                    className="price">{(product.price).toFixed(2)}</span> zł</span></h3>
                                                <Link to={`/results/details/${product.id}`}><ButtonBlue
                                                    textContent={"Porównaj"}/>
                                                </Link>

                                                <h6>w {product.shops.length} sklepach</h6>
                                            </div>
                                        </div>
                                    </div>
                                </ListGroupItem>
                            )

                        })} )
                    </div>
                </p>
            </div>
        )
    }
}

export default connect(
    state => ({
        allProducts: state.allProducts.data
    }),
    dispatch => ({})
)(FavsProducts)

