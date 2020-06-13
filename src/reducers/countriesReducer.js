import {FETCH_COUNTRIES, SEARCH_COUNTRIES,FILTER_COUNTRIES} from '../actions/types';

const initialState={
    countries:[],
    searchedValue:'',
    filteredValue:''
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
                searchedValue:action.payload
            }
        case FILTER_COUNTRIES:
            return {
                ...state,
                filteredValue:action.payload
            }
        default:
            return state;
    }
}