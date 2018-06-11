import React from 'react';

const Flight = (props) => {

    return(
        <div>
            <p>{props.Id}</p>

            <p>{props.Call}</p>

            <p>{props.Op}</p>

            <p>{props.Lat}</p>

            <p>{props.Long}</p>

        </div>
    );
}

export default Flight;