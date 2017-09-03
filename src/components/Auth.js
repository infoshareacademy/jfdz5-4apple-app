import React from 'react'
import {connect} from 'react-redux'

import RegistrationFormView from "./views/RegistrationFormView";


const Auth = ({ user, children }) => (
    <div>
        {
            user === null ?
                <RegistrationFormView/> :
                children
        }
    </div>
)

export default connect(
    state => ({
        user: state.auth.user
    }),
)(Auth)