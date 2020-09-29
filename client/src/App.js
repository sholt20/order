import React from 'react';
import Navbar from './components/Navbar'

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//       rest.needLogin === true
//         ? <Redirect to='/login' />
//         : <Component {...props} />
//     )} />
// )

function App() {

    return (
        <>
            <Navbar />
        </>
    );
}

export default App;
