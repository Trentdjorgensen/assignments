import React from 'react';


const Pet = (props) => {
    return(
            <div>
                <h1>name:{props.name}</h1>
                <h3>breed:{props.breed}</h3>
            </div>
    )
}

Pet.propTypes = {
    name: PropTypes.string,
    breed: PropTypes.string
}

export default Pet;