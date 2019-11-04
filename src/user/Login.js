import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { userContext } from './../context.js'

export function Login(props) {
    const userLogic = useContext(userContext)
    const onSubmit = e => {
        e.preventDefault();
        userLogic.signup(userLogic, e.target.email.value, e.target.password.value)
        props.setPage('profile')
    };
    
    return (
        <form onSubmit={onSubmit}>
            <div>
                <input type="email" name="email" label="email" placeholder="email"></input>
            </div>
            <div>
                <input type="password" name="password" label="password" placeholder="Password"></input>
            </div>
            <button>Login</button>
        </form>
    )
}

Login.propTypes = {
    setPage: PropTypes.func.isRequired
}
