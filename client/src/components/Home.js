import React from 'react';
import './css/homepage.css';

const Home = () => {
    return (
        <>
            <div className="title-container">
                <h1 className="title">Welcome to the light</h1>
            </div>
            <div className="description-container">
                <p className="main-desc">A place away from the dark-loving heathens of discord</p>
                <p className="extra-desc">We've used special light-theme styling technology to keep them away</p>
            </div>
        </>
    )
}

export default Home;