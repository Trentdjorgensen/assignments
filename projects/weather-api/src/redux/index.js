import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const initialState = {}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_WEATHER":
            return [...action.getWeather]
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store;