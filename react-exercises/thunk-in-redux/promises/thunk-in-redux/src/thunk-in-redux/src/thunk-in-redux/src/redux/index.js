import { createStore, applyMiddleware } from 'redux';
 import thunk from 'redux-thunk';
 import axios from 'axios';

 const initialState = []
 
 
 
 export const getTodos = () => {
     return dispatch => {
          axios.get('https://api.vschool.io/natej/todo/').then(response => {
             dispatch({
                 type: "GET_TODOS",
                 todos: response.data
             })
         }).catch(err => {
             console.log(err)
         })
     }
 }
 
 
 export const addTodo = (newTodo) => {
     return dispatch => {
         axios.get('https://api.vschool.io/natej/todo/', newTodo).then(response => {
             dispatch({
                 type: "ADD_TODO",
                 newTodo: response.data
             })
        }).catch(err => {
           console.log(err)
         })
     }
 }
 
 
 
 
 const reducer = (state = initialState, action) => {
     switch(action.type){
         case "GET_TODOS":
             return [...action.todos]
         default:
             return state;
     }
 }
 
 
 
 
 
 
 
 
 const store = createStore(reducer, applyMiddleware(thunk))
 
 export default store;