import {FETCH_COUNTRIES,SEARCH_COUNTRIES} from './types';

 function reStructureData (allcountriesData){
    let finalData=[];
    let countryRow=[];
    for(let country=0;country<allcountriesData.length;country++)
    {
        if(countryRow.length === 4)
        {
            finalData.push(countryRow);
            countryRow=[];
        }
        countryRow.push(allcountriesData[country]);
    }
    if(countryRow.length){
        finalData.push(countryRow);
    }
    return finalData;
}

export const getCountries=()=> dispatch => {
            let getUrl = `https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag;alpha3Code`;
            return fetch(getUrl, {
                method: 'GET'
            }).then(data => {
                if (data.ok) {
                    return data.json();
                }
            }).then(res => dispatch({
              type:FETCH_COUNTRIES,
              payload:reStructureData(res)  
            }));  
}

 export const searchCountry =(event) => dispatch =>{
     
    let getUrl = `https://restcountries.eu/rest/v2/name/${event.target.value}`;
        return fetch(getUrl, {
            method: 'GET'
        }).then(data => {
            if (data.ok) {
                return data.json();
            }
        }).then(res => {
         if(res !== undefined){   
            dispatch({
          type:SEARCH_COUNTRIES,
          searchload:reStructureData(res)  
        })}
    });
 }