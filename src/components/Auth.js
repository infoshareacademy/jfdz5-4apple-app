import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import RegistrationForm from "./RegistrationForm";
import SignIn from './views/SignIn'

const Auth = ({user, children}) => (
  <div>

    {
      user === null ?

        <div><SignIn/> <RegistrationForm/></div>:
        children
    }
  </div>
)

export default withRouter(connect(
    state => ({
        user: state.auth.user
    }),
)(Auth))