import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../actions/auth';
import './css/signup.css'

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
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
        <div className="signup-container">
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <div className="username-field form-field">
                        <label>
                            Username:
                            <input className="username-input input" type="text" onChange={updateUsername} value={username}></input>
                        </label>
                    </div>
                    <div className="email-field form-field">
                        <label>
                            Email:
                            <input className="email-input input" type="email" onChange={updateEmail} value={email}></input>
                        </label>
                    </div>
                    <div className="pasword-field form-field">
                        <label>
                            Password:
                            <input className="password-input input" type="password" onChange={updatePassword} value={password}></input>
                        </label>
                    </div>
                    <button className="signup-button" type="submit">Sign up!</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp;