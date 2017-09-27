import React from 'react'
import {ListGroupItem} from "react-bootstrap";

const ShopList = (props) => {

    const {shops} = props;
    console.log(shops);
    return (
        <div>
            {shops.map((product, index) => {
                return (
                    <ListGroupItem key={index}>
                        <div className="product--container">
                            <img className="product--img" alt="product" src={product.image}/>
                            <div className="product--info">
                                <div className="product--description">
                                    <div className="product--name">
                                        <h2>{product.name}{product.author} {product.title} </h2>
                                    </div>
                                </div>
                                <div className="product--price">
                                    <h3 className="price">od: <span className="price--currency"><span
                                        className="price">{(product.localPrice).toFixed(2)}</span> zł</span></h3>
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