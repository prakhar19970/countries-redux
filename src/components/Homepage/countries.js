
import React, { Component } from 'react';
import SearchBar from "./searchBar";
import Countrycard from './countryCard';
import { connect } from 'react-redux';
import { getCountries} from '../../actions/getActions'
class Countries extends Component {

componentWillMount(){
    this.props.getCountries();
}
    renderDiv=()=>{
        let renderThisComponent;
    
        if(this.props.searchedCountry){
            renderThisComponent= <Countrycard displayResults={this.props.searchedCountry } />
          
        }
      
        else if(this.props.filteredCountries){
            renderThisComponent= <Countrycard displayResults={this.props.filteredCountries} />
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

    filterRegion=(event)=>{
            this.setState({regionSelected:event.target.value})
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
    searchedCountry: state.allcountries.searchedValue,
    filteredCountries: state.allcountries.filteredValue
})

export default connect(mapStateToProps,{getCountries})(Countries); 
