import React from 'react';
import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const getData = () =>{
    return dispatch =>{
        axios.get('https://vschool-cors.herokuapp.com?url=https://api.darksky.net/forecast/ab2d691dd0ec6369cc6d2ec8b3ffa083/${city},${country}').then(response =>{
            dispatch({
                type: 'GET_DATA',
                data: response.data
            })
        }).catch(err =>{
            return(err)
        })
    }
    const city = event.target.elements.name.city.value;
    const country = event.taget.elements.name.country.value;
}

const reducer = (state = {},action) =>{
    switch(action.type){
        case 'GET_DATA':
        return{
            data: action.data
        }
         default:
         return state;  
        
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store;