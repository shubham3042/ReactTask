import React from 'react'
import {ADD_TO_CARD} from '../Action/ActionTypes';
const INITIAL_STATE={
    Addcart:[],
};
const AddToCartReducer=(state=INITIAL_STATE,action)=>{
    let cart=state.Addcart;
        switch(action.type){    
            case ADD_TO_CARD:
                 cart.push(action.playload);
                return {...state,Addcart:cart}
            default:
                 return state;
        }
}
export default AddToCartReducer;