import React from 'react'
import {ListGroupItem, Button} from "react-bootstrap";
import firebase from 'firebase'
import products from '../data/products.json'

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
                  {/*<Button bsSize="large"*/}
                          {/*bsStyle="primary"*/}
                          {/*className="button--continue"*/}
                          {/*onClick={*/}
                            {/*() => {*/}
                              {/*const userId = firebase.auth().currentUser.uid;*/}

                              {/*const allProducts = products.map((item) => {*/}
                                {/*return item.items.map((item) => {*/}
                                   {/*return item*/}
                                  {/*})*/}
                                {/*})*/}

                              {/*const chosenProduct = allProducts.map ((item) => {*/}
                                {/*item.find((name) => {*/}
                                  {/*name.brand = "Nike"*/}
                                {/*})*/}

                              {/*})*/}

                              {/*// fetch(products).then( response => {*/}
                              {/*//   return response.json()*/}
                              {/*// }).then( content => {*/}
                              {/*//   return content.find (*/}
                              {/*//     productId => productId.items.shops.productId = 3 )*/}
                              {/*//   }).then((content) => {*/}
                              {/*//   console.log(content.items)*/}
                              {/*// })*/}


                              {/*console.log(allProducts)*/}
                              {/*console.log(chosenProduct)*/}
                              {/*//console.log(allProducts[0].items)*/}
                              {/*firebase.database().ref(*/}
                                {/*'/FavsProducts/' + userId + '/' + product.productId*/}
                              {/*)*/}
                                {/*.set({*/}
                                  {/*product*/}
                                {/*})*/}
                            {/*}}>Dodaj do listy życzeń </Button>*/}

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