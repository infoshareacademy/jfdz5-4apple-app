import React from 'react'
import firebase from 'firebase'
import { Button } from 'react-bootstrap'
import { connect } from "react-redux";

const FavsProducts = (props) => {

  const userId = firebase.auth().currentUser.uid;
  const getFavs = () => {
    firebase.database()
      .ref('/FavsProducts/' + userId)
      .once('value')
      .then(
        snapshot => {
          ((snapshot.val())) !== null ?
            document.getElementById('Favs').innerHTML = (Object.values(snapshot.val())) :
            document.getElementById('Favs').innerHTML = 'Nie masz jeszcze ulubionych'
          // console.log('snapshot', snapshot)
          // console.log('snapshot.val()', snapshot.val())
          // console.log('snapshot.val()[1]', snapshot.val()[1])
          // console.log('allProducts', props.allProducts)
          console.log(props.allProducts.map((product) => {
            // console.log('product', product)
            // console.log('product.items', product.items)
            return product.items.filter((details) => {
              console.log(snapshot.val()[1].includes(details.model))
              return snapshot.val()[1].includes(details.model)
            }) ? product : null
          }))
        })

  }
  // Results.find((item) => {
  //   item === `${products.items.shops.name}:${products.items.shops.productId}`
  //   console.log(item)
  // })

  return (
    <div>
      <Button onClick={getFavs}>Zobacz ulubione</Button>
      <p id="Favs"></p>
    </div>
  )
}

export default connect(
  state => ({
    allProducts: state.allProducts.data
  }),
  dispatch => ({})
)(FavsProducts)

