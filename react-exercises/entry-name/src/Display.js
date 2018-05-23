import React from 'react';

const Display = (props) => {
    let phrase;

    switch(props.phrase){
        case "greeting":
            phrase = <h1>Hello</h1>
            break;
        case "farewell":
            phrase = <h1>Goodbye</h1>
            break;
        default:
            phrase = <h1>No props were given</h1>
    }
    
    return (
        <div>
           { phrase }
        </div>
    )
}

export default Display;
