import React from 'react';


function User(props) {
    return (
        <>
            <strong>Username:</strong> {props.user.username}<br />
            <hr />
        </>
    );
}
export default User;