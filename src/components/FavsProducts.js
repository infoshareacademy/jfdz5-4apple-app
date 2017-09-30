import React from 'react'
import firebase from 'firebase'
import {Button} from 'react-bootstrap'
import products from '../data/products.json'


class FavsProducts extends React.Component {
  render() {

    const userId = firebase.auth().currentUser.uid;
    const Results = [];
    const getFavs = () => {
      firebase.database()
        .ref('/FavsProducts/' + userId)
        .once('value')
        .then(
          snapshot => {
             return Results.push(Object.keys(snapshot.val()))
          })
        .then( results =>
        results !== null ?
          document.getElementById('Favs').innerHTML = Results :
          document.getElementById('Favs').innerHTML = 'Nie masz ulbionych'
        )

    }
    // Results.find((item) => {
    //   item === `${products.items.shops.name}:${products.items.shops.productId}`
    //   console.log(item)
    // })


    return (
      <div>
        <Button onClick = {getFavs}>Zobacz ulubione</Button>
        <p id="Favs"></p>
      </div>
    )
  }
}

export default FavsProducts

