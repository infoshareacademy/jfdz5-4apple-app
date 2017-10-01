import React from 'react'
import Button from "react-bootstrap/es/Button";
import firebase from 'firebase'


class viewedProducts extends React.Component {


    render() {

        const userId = firebase.auth().currentUser.uid;
        return (
            <Button bsSize="large"
                    bsStyle="primary"
                    className="button--continue"
                    onClick={
                        () => firebase.database().ref(
                            '/viewed/' + userId + '/' + "buty" + ':' +"blabla"
                        )
                            .set(true)
                    }>Dodaj do listy życzeń </Button>

        )
    }
}

export default viewedProducts