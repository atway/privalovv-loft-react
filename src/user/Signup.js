import React from 'react';

export function Signup(props) {
    const onSubmit = e => {
        e.preventDefault();
        props.setPage('profile')
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input type="email" name="email" label="email" placeholder="Email"></input>
            </div>
            <div>
                <input type="text" name="name" label="name" placeholder="Name"></input>
            </div>
            <div>
                <input type="text" name="surname" label="name" placeholder="Surname"></input>
            </div>
            <div>
                <input type="password" name="password" label="password" placeholder="Password"></input>
            </div>
            <button>Signup</button>
        </form>
    )
}
