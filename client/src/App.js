import React from 'react';
import { BrowserRouter, Redirect, Switch, Route, NavLink } from 'react-router-dom';
import UserList from './components/UsersList';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './actions/auth'

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//       rest.needLogin === true
//         ? <Redirect to='/login' />
//         : <Component {...props} />
//     )} />
// )

function App() {

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
                    <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/users" activeClassName="active">Users</NavLink></li>
                    {logCheck
                        ? <li><button onClick={handleLogOut}>Log out</button></li>
                        : <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
                    }
                    {logCheck
                        ? null
                        : <li><NavLink to="/sign-up" activeClassName="active">Sign up</NavLink></li>
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

                <Route path="/">
                    <h1>My Home Page</h1>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
