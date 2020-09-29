import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Switch, Route, NavLink } from 'react-router-dom';

const Home = () => {
    const current = useSelector(state => state.auth.currUser)
    return (
        <>
            <div>
                <h1>Welcome to the light</h1>
            </div>
            <div>
                <h2>A place away from the dark-loving heathens of discord</h2>
                <p>We've used special light-theme styling technology to keep them away</p>
            </div>
        </>
    )
}

export default Home;