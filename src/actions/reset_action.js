export const RESET_STATE = 'RESET_STATE';

export function resetState(){
    return {
        type : RESET_STATE
    }
}
export const resetStore = () => dispatch =>{
    dispatch(resetState())
}