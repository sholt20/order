import React from 'react';
import { BrowserRouter, Redirect, Switch, Route, NavLink } from 'react-router-dom';

import UserList from './components/UsersList';
import Login from './components/Login';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//       rest.needLogin === true
//         ? <Redirect to='/login' />
//         : <Component {...props} />
//     )} />
// )

function App() {

  return (
    <BrowserRouter>
        <nav>
            <ul>
                <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/users" activeClassName="active">Users</NavLink></li>
                <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
            </ul>
        </nav>
        <Switch>
            <Route path="/users">
                <UserList />
            </Route>

            <Route path="/login">
                <Login />
            </Route>

            <Route path="/">
                <h1>My Home Page</h1>
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
