import React from 'react';

export function Header(props) {
    return (
        <>
            <button onClick={ e => props.setPage('profile')}>Profile</button>
            <button onClick={ e => props.setPage('map')}>Map</button>
            <button onClick={ e => props.setPage('login')}>Login</button>
            <button onClick={ e => props.setPage('signup')}>SignUp</button>
        </>
    )
}
