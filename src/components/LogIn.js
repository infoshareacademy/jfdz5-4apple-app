import React from 'react'
import {Form, FormControl, FormGroup, Alert, Glyphicon, InputGroup, Checkbox} from "react-bootstrap";
import ButtonBlue from "./ButtonBlue";

import facebookIcon from '../img/icon_facebook.svg'
import googleIcon from '../img/icon_google.svg'
import firebase from "firebase/index";
import {set} from "../state/auth";
import {connect} from "react-redux";

const providerForGoogle = new firebase.auth.GoogleAuthProvider();
const providerForFacebook = new firebase.auth.FacebookAuthProvider();

class LogIn extends React.Component {
  state = {
    email: '',
    password: '',
    error: null,
  };

  handleLoginChange = (event) => {
    this.setState({
      email: event.currentTarget.value
    })
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.currentTarget.value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(
      user => {
        this.props.setUser(user);
        firebase.database().ref('favorites/' + user.uid).on('value', snapshot => {
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
        this.props.setUser(result);
        firebase.database().ref('favorites/' + result.user.uid).on('value', snapshot => {
        });
        firebase.database().ref('favorites/' + result.user.uid).set({google: 1})
      }
    ).catch(function (error) {
    });
  };

  handlerFacebookLogIn = () => {
    firebase.auth().signInWithPopup(providerForFacebook).then(
      result => {
        this.props.setUser(result);
        firebase.database().ref('favorites/' + result.user.uid).on('value', snapshot => {
        });
        firebase.database().ref('favorites/' + result.user.uid).set({fb: 1})
      }
    ).catch(function (error) {
    });
  };

  render() {
    return (
      <div className="registation-form__content">
        <Form horizontal onSubmit={this.handleSubmit} className="registation-form">
          <FormGroup bsSize="large">
            <InputGroup>
              <InputGroup.Addon>
                <Glyphicon glyph="user"/>
              </InputGroup.Addon>
              <FormControl type="email"
                           placeholder="Wprowadź email"
                           name="email"
                           onChange={this.handleLoginChange}
                           required/>
            </InputGroup>
          </FormGroup>
          <FormGroup bsSize="large"
                  >
            <InputGroup>
              <InputGroup.Addon>
                <Glyphicon glyph="lock"/>
              </InputGroup.Addon>
              <FormControl
                type="password"
                placeholder={"Wprowadź hasło"}
                name="password"
                onChange={this.handlePasswordChange}
                required/>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <Checkbox>Zapamiętaj mnie</Checkbox>
          </FormGroup>
          {
            this.state.error === null ? null : <Alert bsStyle="danger">{this.state.error}</Alert>
          }
          <FormGroup>
            <ButtonBlue type={'submit'}
                        textContent={
                          <span>
                            Dalej
                             <Glyphicon glyph="arrow-right"/>
                          </span>
                        }/>
          </FormGroup>
          <a className={'form__link'}>Nie pamiętasz hasła?</a>
          <button onClick={this.handlerFacebookLogIn} className={'form__icon-btn btn-facebook'}>
            <img height={'30px'} src={facebookIcon}/>Zaloguj przez Facebooka
          </button>
          <button onClick={this.handlerGoogleLogIn} className={'form__icon-btn btn-google'}>
            <img height={'30px'} src={googleIcon}/>Zaloguj przez Google
          </button>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(set(user))
});

export default connect(null, mapDispatchToProps)(LogIn)