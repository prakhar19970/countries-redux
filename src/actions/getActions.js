import {FETCH_COUNTRIES,SEARCH_COUNTRIES,FILTER_COUNTRIES} from './types';

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

function filteredData (allcountriesData,searchValue){
    if(searchValue.length){
        const filteredcountries = allcountriesData.filter(country=>
            {
                return country.name.toLowerCase().includes(searchValue.toLowerCase());
            })
            return reStructureData(filteredcountries);
       }
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

 export const searchCountry =(countryName) =>dispatch=>{
     if(countryName){
        let getUrl = `https://restcountries.eu/rest/v2/name/${countryName}`;
        return fetch(getUrl, {
            method: 'GET'
        }).then(data => {
            if (data.ok) {
                return data.json();
            }
        }).then(res => {
            if(res){
                    dispatch({
                    type:SEARCH_COUNTRIES,
                    payload:reStructureData(res)  
                    })
            }
            else{
                dispatch({
                    type:SEARCH_COUNTRIES,
                    payload:'none' 
                    })
            }
        })  
     }
     else{
    dispatch({
          type:SEARCH_COUNTRIES,
          payload:countryName
    })
}
 }

 export const filterCountry =(regionName) =>dispatch=>{
    if(regionName){
       let getUrl = `https://restcountries.eu/rest/v2/region/${regionName}`;
       return fetch(getUrl, {
           method: 'GET'
       }).then(data => {
           if (data.ok) {
               return data.json();
           }
       }).then(res => {
           if(res){
                   dispatch({
                   type:FILTER_COUNTRIES,
                   payload:reStructureData(res)  
                   })
           }
           else{
               dispatch({
                   type:FILTER_COUNTRIES,
                   payload:false 
                   })
           }
       })  
    }
    else{
   dispatch({
         type:FILTER_COUNTRIES,
         payload:regionName
   })
}
}
