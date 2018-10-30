import { combineReducers } from 'redux';
import userData from './get_user_data'
import isLoaded from "./is_data_loaded";
const appReducer  =  combineReducers({
    data : userData,
    appLoaded: isLoaded
});
const rootReducer = ( state, action ) => {
    if(action.type === 'RESET_STATE') {
        state = undefined;
    }
    return appReducer(state, action)
  }

export default rootReducer;