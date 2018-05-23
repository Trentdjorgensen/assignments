import React from 'react';

const Welcome = (items) => {
        

    return(
        <div>
            
            <h1>Name {items.title}</h1>
            <h3>theme {items.theme}</h3>
            <h3>Time {items.time}</h3>
        </div>
    )
}

export default Welcome;