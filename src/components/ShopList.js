import React from 'react'
import {ListGroupItem, Button} from "react-bootstrap";
import firebase from 'firebase'
import FavsProducts from './FavsProducts'
const ShopList = (props) => {

  const {shops} = props;
  console.log(shops);
  return (
    <div>

      {shops.map((product, index) => {
        return (
          <ListGroupItem key={index}>
            {/*test ulubionych*/}
            <FavsProducts/>
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
                  <Button bsSize="large"
                          bsStyle="primary"
                          className="button--continue"
                          onClick={
                            () => firebase.database().ref(
                              '/FavsProducts/' + firebase.auth().currentUser.uid
                              + '/'+ product.name + ':' + product.productId
                            )
                              .set(true)
                          }>Dodaj do listy życzeń </Button>

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