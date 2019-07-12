// This is a reducer that deals with all api get and post requests

import { FETCH_SCHOOLS , NEW_POST } from '../actions/types';

const initialState = {
    items: [], // this is going to represent the things we get from a fetch request action
    item: {} // this is for a single post
}

export default function ( state = initialState, action ) {
    switch(action.type){
        case FETCH_SCHOOLS :
            console.log('reducer is working')
            return {
                ...state,
                items: action.payload
            }



        default:
        return state;

    }
}