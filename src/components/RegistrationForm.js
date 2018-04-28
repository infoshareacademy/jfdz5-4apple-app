import React from 'react'
import firebase from 'firebase'
import {Form, FormControl, FormGroup, Alert, Glyphicon, InputGroup, Checkbox} from "react-bootstrap";
import './RegistrationForm.css'
import ButtonBlue from "./ButtonBlue";

class RegistrationForm extends React.Component {

  state = {
    email: '',
    password: '',
    confirmPassword: '',
    error: null,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });

    if (this.state.password === '' || this.state.confirmPassword === '') {
      this.setState({error: null})
    }
  };


  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.password === this.state.confirmPassword) {
      firebase.auth().createUserWithEmailAndPassword(
        this.state.email,
        this.state.password
      ).catch(
        (error) => {
          switch (error.code) {
            case "auth/invalid-email":
              return this.setState({error: "Podany przez Ciebie mail, nie istnieje."});
            case "auth/weak-password":
              return this.setState({error: "Hasło musi zawierać przynajmniej 6 znaków."});
            case "auth/email-already-in-use":
              return this.setState({error: "Użytkownik o takim mailu jest już zarejestrowany."});
            default:
              return this.setState({error: "Rejestracja nie powiodła się, spróbuj ponownie."});
          }
        }
      )
    } else {
      this.setState({
        email: this.state.email,
        password: '',
        confirmPassword: '',
        error: 'Podane hasła różnią się od siebie'
      })
    }
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
                placeholder={"Podaj hasło (min. 6 znaków)"}
                name="password"
                value={this.state.password}
                required/>
            </InputGroup>
          </FormGroup>
          <FormGroup bsSize="large"
                     controlId="formHorizontalPassword"
                     onChange={this.handleChange}>
            <InputGroup>
              <InputGroup.Addon>
                <Glyphicon glyph="repeat"/>
              </InputGroup.Addon>
              <FormControl
                type="password"
                placeholder="Powtórz hasło"
                name="confirmPassword"
                value={this.state.confirmPassword}
                required/>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <Checkbox required>Zapoznałem się z regulaminem</Checkbox>
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
        </Form>
      </div>
    )
  }
}


export default RegistrationForm