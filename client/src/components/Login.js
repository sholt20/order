import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../actions/auth';

const Login = () => {
    const [username, setUsername] = useState('Yusuke');
    const [password, setPassword] = useState('password');
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();

    if (token) {
        return <Redirect to="/" />
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(username, password));
    }

    const updateUsername = e => setUsername(e.target.value);
    const updatePassword = e => setPassword(e.target.value);

    return (
        <div className='signup-container'>
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <div className=" username-field form-field">
                        <label>
                            Username:
                            <input className="login-username-input input" type="text" onChange={updateUsername} value={username}></input>
                        </label>
                    </div>
                    <div className="password-field form-field">
                        <label>
                            Password:
                            <input className="login-password-input input" type="password" onChange={updatePassword} value={password}></input>
                        </label>
                    </div>
                    <button className="signup-button" type="submit">Log In</button>
                </div>
            </form>
        </div>
    )
}

export default Login;