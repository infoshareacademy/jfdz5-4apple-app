import React from 'react'
import {connect} from 'react-redux'

import RegistrationFormView from "./views/RegistrationFormView";
import SignIn from './views/SignIn'

const Auth = ({ user, children }) => (
    <div>
        {
            user === null ?
                <SignIn /> :
                children
        }
    </div>
)

export default connect(
    state => ({
        user: state.auth.user
    }),
)(Auth)