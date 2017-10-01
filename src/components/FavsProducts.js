import React from 'react'
import firebase from 'firebase'
import {Button} from 'react-bootstrap'
import allProducts from "../state/allProducts";
import {connect} from "react-redux";

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
        })

  }


  return (
    <div>
      {getFavs()}
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

