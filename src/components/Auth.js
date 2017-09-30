import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
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
          <img src={logo} alt="logo" className="registation-form__logo"/>
          <div className="main_view"><SignIn /><RegistrationForm/></div>
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