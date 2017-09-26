import React from 'react'
import firebase from 'firebase'
import {Button,  Form, FormControl, FormGroup, Alert} from "react-bootstrap";

import logo from '../img/logo.svg'

import './RegistrationForm.css'

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
        })
    };


    handleSubmit = (event) => {

        if (this.state.password === this.state.confirmPassword) {
            event.preventDefault();
            firebase.auth().createUserWithEmailAndPassword(
                this.state.email,
                this.state.password
            )
        } else {
            event.preventDefault();
            err => this.setState({error: err.message})
            console.log('Podane hasła różnią się od siebie')
            this.setState({
                email: this.state.email,
                password: '',
                confirmPassword: ''
            })
        }
    };

    render() {
        return (
            <div className="container">
                <img src={logo} alt="logo" className="registation-form__logo"/>

                <div className="registation-form__content">
                    <Form horizontal onSubmit={this.handleSubmit} className="registation-form__form">
                        <h2>Zarejestruj się</h2>
                        <FormGroup controlId="formHorizontalEmail" onChange={this.handleChange}>

                                <FormControl type="email"
                                             placeholder="Email"
                                             name="email"
                                             value={this.state.email}
                                             required/>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword"
                                   onChange={this.handleChange}>
                                <FormControl
                                    type="password"
                                    placeholder="Podaj hasło"
                                    name="password"
                                    value={this.state.password}
                                    required/>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword"
                                   onChange={this.handleChange}>
                                <FormControl
                                    type="password"
                                    placeholder="Powtórz hasło"
                                    name="confirmPassword"
                                    value={this.state.confirmPassword}
                                    required/>
                        </FormGroup>
                        {
                            this.state.error === null ? null : <Alert bsStyle="danger">{this.state.error}</Alert>

                        }

                        <FormGroup>
                                <Button type="submit">
                                    Zarejestruj się
                                </Button>
                        </FormGroup>

                    </Form>
                </div>
            </div>
        )
    }
}


export default RegistrationForm