import React from 'react'
import firebase from 'firebase'
import {Link} from 'react-router-dom'
import {ListGroupItem, Button} from "react-bootstrap";
import {connect} from 'react-redux'
import Carousel from "react-bootstrap/es/Carousel";
import './SearchResultsList.css'

class Viewed extends React.Component {
    state = {
        loaded: false,
        elements: {},
    }

    componentWillMount() {
        firebase.database()
            .ref('/viewed/' + firebase.auth().currentUser.uid)
            .once('value')
            .then(
                snapshot => {
                    const array = [];

                    for (const element in snapshot.val()) {
                        array.push(snapshot.val()[element]);
                    }

                    this.setState({ loaded: true, elements: array })
                })
    }
    render() {

        if (!this.state.loaded) {
            return null;
        }

        return (
            <div >{
                <Carousel>
                    {
                    this.state.elements.map((products => {
                        return (
                            <Carousel.Item>
                                <img width={300} height={100} alt="200x100" src={products}/>
                                <Carousel.Caption>
                                    <h3>Ostatnio Przeglądane produkty</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    }))}
                </Carousel>
            }
            </div>
        )
    }
}

export default Viewed