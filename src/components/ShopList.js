import React from 'react'
import { ListGroupItem } from "react-bootstrap";
import ButtonBlue from "./ButtonBlue";
import { Link } from "react-router-dom";

const ShopList = (props) => {

  return (
    <div>
      {props.shops.map((product, index) => {
        return (
          <ListGroupItem key={index}>
            <div className="product__container shops">
              <img className="shop__img" alt="product" src={product.image}/>
                <div className="product__description">
                  <div className="product__name">
                    <h2>{product.name}{product.author} {product.title} </h2>
                  </div>
                </div>
                <div className="product__price">
                  <h3 className="price"><span className="price--currency"><span
                    className="price">{(product.localPrice).toFixed(2)}</span> zł</span></h3>
                  <Link to={product.url} target='_blank'>
                    <ButtonBlue helperClass={'button--small'}
                                textContent={"Przejdź do sklepu"}/>
                  </Link>
                </div>
              </div>
          </ListGroupItem>
        )
      })}
    </div>
  )
}


export default ShopList