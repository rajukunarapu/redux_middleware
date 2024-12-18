import { createStore , applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

let initialState = {
    userData:''
}

function reducer(state = initialState,action){
    switch(action.type){
        case 'add_Data':
            return {...state , userData : action.payload}
        default :
        return state
    }
}

const store = createStore(reducer,applyMiddleware(thunk))
export default store