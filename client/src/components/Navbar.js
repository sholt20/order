import React from 'react';
import { BrowserRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/auth'
import Home from './Home'
import OrderApp from './OrderApp';
import './css/navbar.css'

const Navbar = () => {
    const current = useSelector(state => state.auth.currUser)
    const logCheck = useSelector(state => state.auth.loggedIn)
    const dispatch = useDispatch();
    const handleLogOut = () => {
        dispatch(logout())
    };

    return (
        <BrowserRouter>
            <nav>
                <ul className="navList">
                    {logCheck ? <li className="navElement" id="username"><p>{current}</p></li> : null }
                    <li className="navElement"><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    {logCheck
                        ? <li className="navElement"><NavLink to={`/app/${current}`} activeClassName="active">Open Order</NavLink></li>
                        : <li className="navElement"><NavLink to="/sign-up" activeClassName="active">Sign up</NavLink></li>
                    }
                    {logCheck
                        ? <li><button className="logout-button" onClick={handleLogOut}>Log out</button></li>
                        : <li className="navElement"><NavLink to="/login" activeClassName="active">Login</NavLink></li>
                    }
                </ul>
            </nav>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/sign-up">
                    <SignUp />
                </Route>

                <Route exact path={`/app/${ current }`}>
                    {current
                        ? <OrderApp username={ current }/>
                        : <Redirect to="/" />
                    }
                </Route>

                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Navbar;