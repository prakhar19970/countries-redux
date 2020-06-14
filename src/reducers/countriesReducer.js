import {FETCH_COUNTRIES, SEARCH_COUNTRIES,FILTER_COUNTRIES,FETCH_COUNTRY,FETCH_BORDERS,DARK_MODE} from '../actions/types';

const initialState={
    countries:[],
    country:[],
    borderData:[],
    topDomainData:[],
    currenciesData:[],
    languagesData:[],
    searchedValue:'',
    filteredValue:'',
    darkmode:false
}

export default function(state = initialState, action){
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
        case FETCH_COUNTRY:
            return {
                ...state,
                country:action.payload,
                topDomainData:action.topDomain,
                currenciesData:action.currencies,
                languagesData:action.languages
            }
        case FETCH_BORDERS:
            return {
                    ...state,
                    borderData:action.borderData
                }
        case DARK_MODE:
            return{
                ...state,
                darkmode:action.payload
            }
        default:
            return state;
    }
}