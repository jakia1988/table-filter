import {LOAD_USER_DATA} from '../actions'

export default function(state=[],action){    
    switch(action.type){
        case LOAD_USER_DATA:
            return [...state,action.payload]
        default:
        return state;
    }
}
    