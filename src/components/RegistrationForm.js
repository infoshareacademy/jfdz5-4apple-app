import React from 'react'
import {connect} from 'react-redux'
import {Button, Col, Form, FormControl, FormGroup} from "react-bootstrap";

import {add} from '../state/auth'
import logo from '../img/logo.svg'

import './RegistrationForm.css'

class RegistrationForm extends React.Component {

    state = {
        userName: '',
        userEmail: '',
        password: ''
    };

    handleChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addNewUser(this.state.userName, this.state.userEmail, this.state.password)
    };

    render() {
        return (
            <div className="container">
                <div className="registation-form__content">
                    <img src={logo} alt="logo" className="registation-form__logo"/>
                    <h2>Zarejestruj się</h2>
                    <Form horizontal onSubmit={this.handleSubmit} className="registation-form__form">
                        <FormGroup controlId="formHorizontalName" onChange={this.handleChange}>
                            <Col sm={12}>
                                <FormControl type="text" placeholder="Nazwa użykownika" required/>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalEmail" onChange={this.handleChange}>

                            <Col sm={12}>
                                <FormControl type="email" placeholder="Email" required/>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword"
                                   onChange={this.handleChange}>
                            <Col sm={12}>
                                <FormControl type="password" placeholder="Hasło" required/>
                            </Col>
                        </FormGroup>


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

const mapDispatchToProps = dispatch => ({
    addNewUser: (userName, userEmail, password) => dispatch(add(userName, userEmail, password))
});

export default connect(
    null,
    mapDispatchToProps,
)(RegistrationForm)