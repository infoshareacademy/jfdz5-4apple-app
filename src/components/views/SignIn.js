import React from 'react'
import {Button, Form, FormControl, FormGroup, Checkbox, Alert} from 'react-bootstrap'
import {connect} from 'react-redux'
import {set} from '../../state/auth'
import firebase from 'firebase'
import facebook from '../../img/facebook.svg'
import gmail from '../../img/gmail.svg'


const providerForGoogle = new firebase.auth.GoogleAuthProvider();
const providerForFacebook = new firebase.auth.FacebookAuthProvider();


class SignIn extends React.Component {


  state = {
    login: '',
    password: '',
    error: null
  };

  handleLoginChange = (event) => {
    this.setState({
      login: event.currentTarget.value
    })
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.currentTarget.value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();

    firebase.auth().signInWithEmailAndPassword(this.state.login, this.state.password).then(
      user => {
        this.props.setUser(user);
        firebase.database().ref('favorites/' + user.uid).on('value', snapshot => {
          console.log(snapshot.val())
        });
        firebase.database().ref('favorites/' + user.uid).set({email: 1})
      }
    ).catch(
      err => this.setState({error: "Nieprawidłowe dane logowania. Spróbuj ponownie"})
    )
  };

  handlerGoogleLogIn = () => {

    firebase.auth().signInWithPopup(providerForGoogle).then(
      result => {
        console.log(result)
        this.props.setUser(result);
        firebase.database().ref('favorites/' + result.user.uid).on('value', snapshot => {
          console.log(snapshot.val())
        });
        firebase.database().ref('favorites/' + result.user.uid).set({google: 1})
      }
    ).catch(function (error) {

    });
  }

  handlerFacebookLogIn = () => {

    firebase.auth().signInWithPopup(providerForFacebook).then(
      result => {

        console.log(result)
        this.props.setUser(result);
        firebase.database().ref('favorites/' + result.user.uid).on('value', snapshot => {
          console.log(snapshot.val())
        });
        firebase.database().ref('favorites/' + result.user.uid).set({fb: 1})


      }
    ).catch(function (error) {

    });
  }

  render() {
    return (



      <div className="container page">
        {
          this.state.error === null ? null : <Alert bsStyle="danger">{this.state.error}</Alert>

        }


        <Form horizontal onSubmit={this.handleSubmit}>
          <h1>Zaloguj się</h1>
          <FormGroup controlId="formHorizontalEmail">
            <FormControl onChange={this.handleLoginChange} type="text" placeholder="Email"/>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <FormControl onChange={this.handlePasswordChange} type="password" placeholder="Hasło"/>
          </FormGroup>
          <FormGroup>
            <Button className="btn btn-block btn-primary btn-loading" bsStyle="success" type="submit">
              Zaloguj
            </Button>
          </FormGroup>
          <FormGroup>
            <Checkbox>Zapamiętaj mnie</Checkbox>
          </FormGroup>


          <FormGroup>

            <Button onClick={this.handlerGoogleLogIn} bsStyle="default"><img src={gmail}
                                                                             alt="gmail"
                                                                             height="35"/>

            </Button>


            <Button onClick={this.handlerFacebookLogIn} bsStyle="default"><img src={facebook}
                                                                               alt="fb"
                                                                               height="35"/>

            </Button>

          </FormGroup>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(set(user))
});

export default connect(null, mapDispatchToProps)(SignIn)