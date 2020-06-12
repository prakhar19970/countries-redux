import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchCountry } from '../../actions/getActions'

class SearchBar extends Component {

    render(){
    return(
        <div className="d-flex search-wrapper" >
          <div className="input-area">
          <i className='fa fa-search fa-sm'></i>
        <input type="text" name="search" className="countries-search-bar" placeholder='Search for a country...' onChange={this.props.searchCountry}/>
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

// const mapStateToProps = state => ({
//   searchedCountry: state.searchedCountry.searchedValue
// })

// export default connect(mapStateToProps,{searchCountry})(SearchBar); 
export default SearchBar;