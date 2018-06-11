import React from 'react';
import {connect} from 'react-redux';
import List from './List';

const Home = (props) =>{

    // console.log(props)
    const mappedList = props.data.daily.data.map(list => {
        return (
        <List
           temperature={list.temperature}
           humitity={list.humitity}
           precipProbability={list.precipProbability}
           time={list.time}
           windSpeed={list.windSpeed}
           icon={list.icon}
           summary={list.summary}
        />
                  
        )
    })

    return(
        <div>
       
        {mappedList}
        </div>
    
    )
}


export default connect(state=>state, {})(Home);