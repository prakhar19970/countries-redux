import {FETCH_COUNTRIES, SEARCH_COUNTRIES} from '../actions/types';

const initialState={
    countries:[]
}

export default function(state = initialState, action){
    console.log(action)
    switch(action.type){
        case FETCH_COUNTRIES:
            return {
                ...state,
                countries:action.payload
            }
        case SEARCH_COUNTRIES:
            return {
                ...state,
                searchedValue:action.searchload
            }
        default:
            return state;
    }
}