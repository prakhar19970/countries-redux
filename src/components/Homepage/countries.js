
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
      if(this.props.searchedCountry){
        renderThisComponent= <Countrycard displayResults={this.props.searchedCountry } />
      }
    //    if(countryName.length && regionName.length){

    //    const filtercountry = this.state.countriesData.filter(country=>
    //         {
    //              return country.name.toLowerCase().includes(countryName.toLowerCase()) && country.region.toLowerCase() === regionName.toLowerCase()}) 
    //        renderThisComponent= <Countrycard displayResults={this.reStructureData(filtercountry)} darkMode={this.props.darkMode}/>
    //    }
    //    else if(regionName.length){
    //     const filterRegion= this.state.countriesData.filter(country=>
    //         {

    //             return country.region.toLowerCase() === regionName.toLowerCase()}) 
    //         renderThisComponent= <Countrycard displayResults={this.reStructureData(filterRegion)} darkMode={this.props.darkMode}/>
    //    }
        else{
        renderThisComponent= <Countrycard displayResults={this.props.allcountries } />
     }
    return renderThisComponent;
    }

    searchCountry=(event)=>{
        console.log(event.target.value);
        if(event.target.value){
        this.props.searchCountry(event.target.value);
        this.renderDiv(this.props.searchedCountry)
        }
        else{
            this.renderDiv() 
        }
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
           <SearchBar />
            <div className="country-blocks-wrapper">
                {this.renderDiv()}
            </div>
        </div>
        )
         
    }

}

const mapStateToProps = state => ({
    allcountries: state.allcountries.countries,
    searchedCountry: state.allcountries.searchedValue
})

export default connect(mapStateToProps,{getCountries})(Countries); 


// filterRegionData={this.regionShard(this.state.countriesData)} filterFunction={this.filterRegion} darkMode={this.props.darkMode}