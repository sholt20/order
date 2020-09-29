import React from 'react';
import { BrowserRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import UserList from './UsersList';
import Login from './Login';
import SignUp from './SignUp';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions/auth'
import Home from './Home'

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
                {logCheck ? <p>Logged in as {current}</p> : null }
                <ul>
                    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/users" activeClassName="active">Users</NavLink></li>
                    {logCheck
                        ? <li><NavLink to={`/app/${current}`} activeClassName="active">Open Order</NavLink></li>
                        : <li><NavLink to="/sign-up" activeClassName="active">Sign up</NavLink></li>
                    }
                    {logCheck
                        ? <li><button onClick={handleLogOut}>Log out</button></li>
                        : <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
                    }
                </ul>
            </nav>
            <Switch>
                <Route path="/users">
                    <UserList />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/sign-up">
                    <SignUp />
                </Route>

                <Route exact path={`/app/${ current }`}>
                    {current
                        ? <p>In the app</p>
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