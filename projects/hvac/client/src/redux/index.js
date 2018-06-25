import axios from 'axios';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

export const getForm = () =>{
    return dispatch =>{
        axios.get('/form').then(response =>{
            dispatch({
                type: "GET_FORM",
                form: response.data
            })
            // console.log(response.data)
        }).catch(err =>{
            console.log(err)
        })
    }
}
export const addForm = newForm =>{
    return dispatch => {
        axios.post('/form', newForm).then(response =>{
            dispatch({
                type: 'ADD_FORM',
                data: response.data
            })
        }).catch(err =>{
            console.log(err)
        })
    }
}
export const newForm = (id, prevForm, newForm) =>{
    return dispatch =>{
        console.log(prevForm)
        axios.put('/form/'+ id, {form: [...prevForm,newForm]}).then(response =>{
            dispatch(getForm())
        }).catch(err =>{
            console.log(err)
        })
    }
}
export const deleteForm = id =>{
    return dispatch =>{
        axios.delete(`/form/${id}`).then(response =>{
            dispatch(getForm())
        }).catch(err =>{
            console.log(err)
        })
    }
}

const reducer = (state = [], action) =>{
    switch(action.type){
        case "GET_FORM":
            return action.form
        case "ADD_FORM":
            return action.form
    default:
        return state
    }
}

const store = createStore(reducer, 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
applyMiddleware(thunk))

// store.subscribe(() => console.log(store.getState()))

export default store;