import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import RegistrationForm from "./RegistrationForm";
import SignIn from './views/SignIn'



const Auth = ({user, children}) => (

  //<RegistrationForm/>
  <div>

    {
      user === null ?

        <div><SignIn/> </div>:
        children
    }
  </div>
)

export default withRouter(connect(
    state => ({
        user: state.auth.user
    }),
)(Auth))