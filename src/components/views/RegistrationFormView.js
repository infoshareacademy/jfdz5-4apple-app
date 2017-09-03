import React from 'react'
import {connect} from 'react-redux'
import {Button, Col, ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";

import {add} from '../../state/auth'

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
                <h1>Zarejestruj się</h1>
                <Form horizontal onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formHorizontalName" onChange={this.handleChange}>
                        <Col componentClass={ControlLabel} sm={2}>
                            User name
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="User name" required/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalEmail" onChange={this.handleChange}>
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={10}>
                            <FormControl type="email" placeholder="Email" required/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword"
                               onChange={this.handleChange}>
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Password" required/>
                        </Col>
                    </FormGroup>


                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit">
                                Sign in
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    addNewUser: (userName, userEmail, password) => dispatch(add(userName,userEmail,password))
});

export default connect(
    null,
    mapDispatchToProps,
)(RegistrationForm)