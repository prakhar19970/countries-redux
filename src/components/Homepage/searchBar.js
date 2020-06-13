import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchCountry } from '../../actions/getActions'

class SearchBar extends Component {

  searchedValue=(event)=>{
  if(event.target.value){
      this.props.searchCountry(event.target.value)
  }
  else{
    console.log('nulll');
    this.props.searchCountry()
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
          <select className="btn white-btn">
          <option className="btn white-btn" value=''>Region</option>
            {/* {this.props.filterRegionData.map((data,index)=>(
                  <option value={data}>{data}</option>
            ))} */}
        </select>
        </div>
     </div>
    )
    }
}

SearchBar.propTypes ={
 searchCountry: PropTypes.func.isRequired
}
export default connect(null,{searchCountry})(SearchBar); 