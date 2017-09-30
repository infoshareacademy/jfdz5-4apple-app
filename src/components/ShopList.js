import React from 'react'
import {ListGroupItem} from "react-bootstrap";
import {Link} from 'react-router-dom'
import ButtonBlue from "./ButtonBlue"


const ShopList = (props) => {

    const {shops} = props;
    return (
        <div>
            {shops.map((product, index) => {
                return (
                    <ListGroupItem key={index}>
                        <div className="product--container">
                            <img className="shop--img" alt="product" src={product.image}/>
                            <div className="product--info">
                                <div className="product--description">
                                    <div className="product--name">
                                        <h2>{product.name}{product.author} {product.title} </h2>
                                    </div>
                                </div>
                                <div className="product--price">
                                    <h3 className="price"><span className="price--currency"><span
                                        className="price">{(product.localPrice).toFixed(2)}</span> zł</span></h3>
                                    <Link to={`/results/details/orders/${index}`}><ButtonBlue textContent={"Dodaj do listy życzeń"}/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ListGroupItem>
                )

            })}
        </div>
    )
}


export default ShopList