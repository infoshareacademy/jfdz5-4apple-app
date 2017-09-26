import React from 'react'
import firebase from 'firebase'
import {Button, Col, Form, FormControl, FormGroup, Alert} from "react-bootstrap";

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
                <div className="registation-form__content">
                    <img src={logo} alt="logo" className="registation-form__logo"/>
                    <h2>Zarejestruj się</h2>
                    <Form horizontal onSubmit={this.handleSubmit} className="registation-form__form">


                        <FormGroup controlId="formHorizontalEmail" onChange={this.handleChange}>

                            <Col sm={12}>
                                <FormControl type="email" placeholder="Email" name="email" required/>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword"
                                   onChange={this.handleChange}>
                            <Col sm={12}>
                                <FormControl type="password" placeholder="Podaj hasło" name="password" required/>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword"
                                   onChange={this.handleChange}>
                            <Col sm={12}>
                                <FormControl type="password" placeholder="Powtórz hasło" name="confirmPassword"
                                             required/>
                            </Col>
                        </FormGroup>
                        {
                            this.state.error === null ? null : <Alert bsStyle="danger">{this.state.error}</Alert>

                        }

                        <FormGroup>
                            <Col sm={12}>
                                <Button type="submit">
                                    Zarejestruj się
                                </Button>
                            </Col>
                        </FormGroup>

                    </Form>
                </div>
            </div>
        )
    }
}


export default RegistrationForm