import React from 'react'
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Checkbox} from 'react-bootstrap'
import { connect } from 'react-redux'

class SignIn extends React.Component {

state = {
    login: '',
    password: ''
}

handleLoginChange = (event) => {
    this.setState ({
        login: event.currentTarget.value
    })
}

    handlePasswordChange = (event) => {
        this.setState ({
            password: event.currentTarget.value
        })
    }

    render (){
        return (
            <div>
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Login
                        </Col>
                        <Col sm={2}>
                            <FormControl onChange={ this.handleLoginChange } type="text" placeholder="login" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Hasło
                        </Col>
                        <Col sm={2}>
                            <FormControl onChange={ this.handlePasswordChange} type="password" placeholder="hasło" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Checkbox>Zapamiętaj mnie</Checkbox>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button bsStyle="primary" type="submit">
                                Zaloguj
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
                );
            </div>
        )
    }
}

export default SignIn