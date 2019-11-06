import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { userContext } from './../context.js'
import { TextField } from '@material-ui/core';

export function Login(props) {
    const userLogic = useContext(userContext)
    const onSubmit = e => {
        e.preventDefault();
        //console.log(e)
        const data = new FormData(e.target);
        userLogic.login(userLogic, data.get("email"), data.get("password"))
        props.setPage('profile')
    };
    
    return (
        <form onSubmit={onSubmit}>
            <div>
                <TextField type="email" name="email" label="email" placeholder="email" inputProps={{ 'data-testid': "loginemail", 'name': "email"}}></TextField>
            </div>
            <div>
                <TextField type="password" name="password" label="password" placeholder="Password" inputProps={{ 'data-testid': "loginpassword", 'name': "password"}}></TextField>
            </div>
            <button>Signing</button>
        </form>
    )
}

Login.propTypes = {
    setPage: PropTypes.func.isRequired
}
