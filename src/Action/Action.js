import {ADD_TO_CARD} from './ActionTypes';
export const addcard=(data)=>{
    return{
        type:ADD_TO_CARD,
        playload:{
        data:data,
        quality:1
        }
    }
}