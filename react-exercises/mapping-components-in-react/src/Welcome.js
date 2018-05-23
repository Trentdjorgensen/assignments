import React from 'react';
import App from './App';

const Welcome = (props) => {
    return(
        <div>
            <h1>{props.name}</h1>
            <h3>{props.nickName}</h3>
            <h3>{props.weapon}</h3>
            <img src={props.imgUrl} alt={`${props.name}`} width="200"/>
        </div>
    )
}

export default Welcome;