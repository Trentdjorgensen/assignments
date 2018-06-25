import {createStore,applyMiddleware} from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';


export const getVotes = () =>{
    return dispatch =>{
        axios.get('/vote').then(response => {
            dispatch({
                type: "GET_VOTES",
                votes: response.data
            })
        }).catch(err =>{
            console.log(err)
        })
    }
}
export const addVotes = newVote =>{
    return dispatch=>{
        axios.post('/vote', newVote).then(response => {
            dispatch(getVotes())
        }).catch(err =>{
            console.log(err)
        })
    }
}
export const newComment = (id, prevComment, newComment) =>{
    return dispatch=>{
        console.log(prevComment)
        axios.put('/vote/' + id, {comment: [...prevComment,newComment]}).then(response => {
            
            dispatch(getVotes())
        }).catch(err =>{
            console.log(err)
        })
    }
}
export const deleteVote = id =>{
    return dispatch =>{
        axios.delete(`/vote/${id}`).then(response =>{
            dispatch(getVotes())
        }).catch(err => {
            console.log(err)
        })
    }
}

export const editVote = (id, newVote) => {
    return dispatch => {
        axios.put(`/vote/${id}`, newVote).then(response =>{
            dispatch(getVotes())
        }).catch(err => {
            console.log(err)
        })
    }
}

const reducer = (state = [], action) =>{
    switch(action.type){
        case "GET_VOTES":
        return action.votes
    default:
        return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

store.subscribe(() => console.log(store.getState()))



export default store;