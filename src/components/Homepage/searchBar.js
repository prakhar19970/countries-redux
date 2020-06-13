import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchCountry, filterCountry} from '../../actions/getActions'

class SearchBar extends Component {

  searchedValue=(event)=>{
  if(event.target.value){
      this.props.searchCountry(event.target.value)
    } 
  else{
    this.props.searchCountry()
  }
  }

  regionFilter=(event)=>{
    if(event.target.value){
      this.props.filterCountry(event.target.value)
    }
  else{
    this.props.filterCountry()
  }
  }
    render(){
    return(
        <div className="d-flex search-wrapper" >
          <div className="input-area">
          <i className='fa fa-search fa-sm'></i>
        <input type="text" name="search" className="countries-search-bar" placeholder='Search for a country...' onChange={this.searchedValue}/>
        </div>        
        <div className="dropdown">
          <select className="btn white-btn" onChange={this.regionFilter}>
          <option className="btn white-btn" value=''>Region</option>
                  <option value='africa'>Africa</option>
                  <option value='americas'>Americas</option>
                  <option value='asia'>Asia</option>
                  <option value='europe'>Europe</option>
                  <option value='oceania'>Oceania</option>
                  <option value='polar'>Polar</option>
        </select>
        </div>
     </div>
    )
    }
}

const mapStateToProps = state => ({
  searchedCountry: state.allcountries.searchedValue,
  filteredCountries: state.allcountries.filteredValue
})

SearchBar.propTypes ={
 searchCountry: PropTypes.func.isRequired,
 filterCountry: PropTypes.func.isRequired
}
export default connect(mapStateToProps,{searchCountry,filterCountry})(SearchBar); 