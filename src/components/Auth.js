import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import WelcomeScreenView from './views/WelcomeScreenView'
import './Auth_styles.css'


const Auth = ({user, children}) => (
  <div>
    {
      user === null ?
        <WelcomeScreenView/>
        :
        children
    }
  </div>
);

export default withRouter(connect(
  state => ({
    user: state.auth.user
  }),
)(Auth))