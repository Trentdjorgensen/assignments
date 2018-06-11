import React from 'react';

const List = (props) => {

    return(
        <div>
            <p>{props.temperature}</p>

            <p>{props.humility}</p>

            <p>{props.precipProbability}</p>

            <p>{props.time}</p>

            <p>{props.windSpeed}</p>

            <p>{props.icon}</p>

            <p>{props.summary}</p>

        </div>
    );
}

export default List;
