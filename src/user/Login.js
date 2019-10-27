import React from 'react';

export function Login(props) {
    const onSubmit = e => {
        e.preventDefault();
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
