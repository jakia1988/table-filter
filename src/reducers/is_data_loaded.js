import {IS_DATA_LOADED} from '../actions'

export default function(state=false,action){    
    switch(action.type){
        case IS_DATA_LOADED:
            return action.isLoaded
        default:
        return state;
    }
}