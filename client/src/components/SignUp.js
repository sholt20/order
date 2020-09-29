import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../actions/auth';

const SignUp = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();

    if (token) {
        return <Redirect to="/" />
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp(username, email, password));
    }

    const updateUsername = e => setUsername(e.target.value);
    const updatePassword = e => setPassword(e.target.value);
    const updateEmail = e => setEmail(e.target.value);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" onChange={updateUsername} value={username}></input>
                </label>
                <label>
                    Email:
                    <input type="email" onChange={updateEmail} value={email}></input>
                </label>
                <label>
                    Password:
                    <input type="password" onChange={updatePassword} value={password}></input>
                </label>
                <button type="submit">Sign up!</button>
            </form>
        </div>
    )
}

export default SignUp;