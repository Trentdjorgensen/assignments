import React from 'react';
import Pet from './Pet';


const Friends = (props) => {
    const mappedPets = props.pet.map((pet, i)  => {
    
    return(
        <Pet name={pet.name}
             breed={pet.breed}
             key={ pet.name + i}/>
    
    )
})
    return(
        <div>
            <h1> name:{props.name}</h1>
            <h3>age:{props.age}  </h3> 
            <p> Pets:</p>
                 { mappedPets }     
        </div>
);

};

Friends.propTypes = {
    name: propTypes,
    age: propTypes
}

export default Friends;