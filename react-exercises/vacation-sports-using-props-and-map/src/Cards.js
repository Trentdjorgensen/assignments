import React from 'react';
import App from './App';

const Cards = (props) => {
    return(
            <div>
                <h1>{props.place}</h1>
                <h3>{props.price}</h3>
                <h3>{props.timeToGo}</h3>
                <img src={props.imgUrl} alt={`${props.name}`} width="200"/>
            </div>
    )
    return(
       
    )
}

export default Cards;