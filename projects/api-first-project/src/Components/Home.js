import React from 'react';
import {connect} from 'react-redux';
import Flight from './Flight';

const Home = (props) =>{

    // console.log(props)
    const mappedFlight = props.data && props.data.acList.map(flight => {
        return (
           
                  
        )}
)

    return(
        <div className='home'>
        <a href='#home'class='active'>Home</a>
        <div>
        <a href='#Services'>Services</a>
        </div>
        <div><a href='#Contact'>Contact</a></div>
        {mappedFlight}
        </div>
    
    )
}



export default connect(state=>state, {})(Home);