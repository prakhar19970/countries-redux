
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
   
        else{
        renderThisComponent= <Countrycard displayResults={this.props.allcountries } />
     }
    return renderThisComponent;
    }

render(){

    return(
        <div className={this.props.modestatus ?"dark-background countries-outer-area":"countries-outer-area"}>
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
    filteredCountries: state.allcountries.filteredValue,
    modestatus: state.allcountries.darkmode
})

export default connect(mapStateToProps,{getCountries})(Countries); 
