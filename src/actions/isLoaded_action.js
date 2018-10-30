import {IS_DATA_LOADED} from './index';
export function isLoaded(flag){
    return{
      type: IS_DATA_LOADED,
      isLoaded: flag
    }
  }