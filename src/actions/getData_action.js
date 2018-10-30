import {LOAD_USER_DATA} from './index';
import {isLoaded} from './isLoaded_action'
import axios from 'axios';


export function getData(data){
    return{
        type: LOAD_USER_DATA,
        payload : data
    }
}
export const loadData = () => {
  
    return (dispatch) => {
      dispatch(isLoaded(false))
      return axios.get('db/user.json')
        .then(response => {
          dispatch(getData(response.data))
          dispatch(isLoaded(true))
        })
        .catch(error => {
          throw(error);
        });
    };
  };  
