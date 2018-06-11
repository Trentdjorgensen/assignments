import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';


export const getData = (num) => {
    console.log(num)
    return dispatch =>{
        axios.get('https://vschool-cors.herokuapp.com?url=http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat=33.433638&lng=-112.008113&fDstL=0&fDstU=100').then(response => {
            dispatch({
                type: 'GET_DATA',
                data: response.data,
                num: num
            })
        }).catch(err => {
           return(err)
    })

}   
}



const reducer = (state = {},action) =>{
    switch(action.type){
        // case 'GET_DATA':
//         return()
// //              data: action.data.acList.filter(flight=>{
// //                 if(flight.Call === action.num){
// //                 return flight; 
// //  })
//     // // default:
//     //     return state;
             
    }}


const store = createStore(reducer, applyMiddleware(thunk))

export default getData;