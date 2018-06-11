import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';


export const getData = () =>{
    return dispatch =>{
        axios.get('/bounty').then(response =>{
            dispatch({
                type: 'GET_DATA',
                data: response.data
            })
        });
    }
}

const reducer = (state={}, action) => {
    switch(action.type){
        case 'GET_DATA':
        return {
            data: action.data
        }
        default: 
            return state
    }
}


export default createStore(
    reducer,
    applyMiddleware(thunk)
)