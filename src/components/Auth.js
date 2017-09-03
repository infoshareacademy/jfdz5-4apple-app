import React from 'react'
import {connect} from 'react-redux'

import RegistrationForm from "./RegistrationForm";


const Auth = ({ user, children }) => (
    <div>
        {
            user === null ?
                <RegistrationForm/> :
                children
        }
    </div>
)

export default connect(
    state => ({
        user: state.auth.user
    }),
)(Auth)