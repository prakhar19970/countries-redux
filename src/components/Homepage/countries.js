
import React, { Component } from 'react';
import SearchBar from "./searchBar";
import Countrycard from './countryCard';
import { connect } from 'react-redux';
import { getCountries ,searchCountry } from '../../actions/getActions'
class Countries extends Component {

componentWillMount(){
    this.props.getCountries();
}
    renderDiv=()=>{
        let renderThisComponent;
      //     const regionName = this.state.regionSelected;
    //    if(countryName.length && regionName.length){

    //    const filtercountry = this.state.countriesData.filter(country=>
    //         {
    //              return country.name.toLowerCase().includes(countryName.toLowerCase()) && country.region.toLowerCase() === regionName.toLowerCase()}) 
    //        renderThisComponent= <Countrycard displayResults={this.reStructureData(filtercountry)} darkMode={this.props.darkMode}/>
    //    }
        if(this.props.searchedCountry){
            renderThisComponent= <Countrycard displayResults={this.props.searchedCountry}/>
       }
    //    else if(regionName.length){
    //     const filterRegion= this.state.countriesData.filter(country=>
    //         {

    //             return country.region.toLowerCase() === regionName.toLowerCase()}) 
    //         renderThisComponent= <Countrycard displayResults={this.reStructureData(filterRegion)} darkMode={this.props.darkMode}/>
    //    }
      else{
        
        renderThisComponent= <Countrycard displayResults={this.props.allcountries} />
         }
    return renderThisComponent;
    } 

    filterRegion=(event)=>{
            this.setState({regionSelected:event.target.value})
        }

    regionShard=(regions)=>{
        let regionContainer=[];
        regions.map((regionData,index)=>{
            if(regionData.region !== '' && !(regionContainer.includes(regionData.region))){
            regionContainer.push(regionData.region)}
            return regionContainer;
        })
        return regionContainer;
    }

render(){

    return(
        <div className="countries-outer-area">
           <SearchBar  searchCountry={this.props.searchCountry}/>
            <div className="country-blocks-wrapper">
                {this.renderDiv()}
            </div>
        </div>
        )
         
    }

}

const mapStateToProps = state => ({
    allcountries: state.allcountries.countries,
    searchedCountry: state.searchedCountry.searchedValue
})

export default connect(mapStateToProps,{getCountries , searchCountry})(Countries); 


// filterRegionData={this.regionShard(this.state.countriesData)} filterFunction={this.filterRegion} darkMode={this.props.darkMode}