import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {Tabs, Tab} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import RegistrationForm from "./RegistrationForm";
import SignIn from './views/SignIn'
import logo from '../img/logo.svg'
import Auth_styles from './Auth_styles.css'


const Auth = ({user, children}) => (


  <div>

    {
      user === null ?

        <div>


          <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
            <img src={logo} alt="logo" className="registation-form__logo"/>
            <Tab eventKey={1} title="Zaloguj"><SignIn /></Tab>
            <Tab eventKey={2} title="Zarejestruj"><RegistrationForm/></Tab>
          </Tabs>


          <div className="main_view"></div>
        </div>:
        children
    }
  </div>
)

export default withRouter(connect(
    state => ({
        user: state.auth.user
    }),
)(Auth))