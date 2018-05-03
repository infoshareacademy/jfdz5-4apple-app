import React from 'react'
import { ListGroupItem } from "react-bootstrap";

const ShopList = (props) => {

  const {shops} = props;


  return (
    <div>

      {shops.map((product, index) => {
        return (
          <ListGroupItem key={index}>
            <div className="product__container">
              <img className="shop__img" alt="product" src={product.image}/>
              <div className="product__info">
                <div className="product__description">
                  <div className="product--name">
                    <h2>{product.name}{product.author} {product.title} </h2>
                  </div>
                </div>
                <div className="product__price">
                  <h3 className="price"><span className="price--currency"><span
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