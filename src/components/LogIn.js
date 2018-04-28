import React from 'react'
import {Form, FormControl, FormGroup, Alert, Glyphicon, InputGroup, Checkbox} from "react-bootstrap";
import ButtonBlue from "./ButtonBlue";

import facebookIcon from '../img/icon_facebook.svg'
import googleIcon from '../img/icon_google.svg'

class LogIn extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    error: null,
  };

  render() {
    return (
      <div className="registation-form__content">
        <Form horizontal onSubmit={this.handleSubmit} className="registation-form">
          <FormGroup controlId="formHorizontalEmail" onChange={this.handleChange} bsSize="large">
            <InputGroup>
              <InputGroup.Addon>
                <Glyphicon glyph="user"/>
              </InputGroup.Addon>
              <FormControl type="email"
                           placeholder="Wprowadź email"
                           name="email"
                           value={this.state.email}
                           required/>
            </InputGroup>
          </FormGroup>
          <FormGroup bsSize="large"
                     controlId="formHorizontalPassword"
                     onChange={this.handleChange}>
            <InputGroup>
              <InputGroup.Addon>
                <Glyphicon glyph="lock"/>
              </InputGroup.Addon>
              <FormControl
                type="password"
                placeholder={"Wprowadź hasło"}
                name="password"
                value={this.state.password}
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
          <button className={'form__icon-btn btn-facebook'}><img height={'30px'} src={facebookIcon}/>Zaloguj przez Facebooka</button>
          <button className={'form__icon-btn btn-google'}><img height={'30px'} src={googleIcon}/>Zaloguj przez Google</button>
        </Form>
      </div>
    )
  }
}

export default LogIn