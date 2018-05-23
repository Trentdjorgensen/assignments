import React from 'react';

const Welcome = (props) => {
    console.log(props)
    return(
        <div><h1>Hello {props.name}</h1>
            <h3>email: {props.email}</h3>
            <h3>phone: {props.phoneNumber}</h3>
        </div>
    );
}

export default Welcome;