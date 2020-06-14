import React, { Component } from 'react'
import {activateDarkMode} from '../../actions/getActions'
import { connect } from 'react-redux';

class CountriesHeader extends Component {

    render(){
    return(
    <header className={this.props.modestatus ? "dark-mode-element countries-header":"countries-header"}>
        <div className="header-title">Where in the world?</div>
        <button className={this.props.modestatus? "dark-mode-element btn white-btn":"btn white-btn"} onClick={()=>this.props.activateDarkMode(this.props.modestatus)}><span><i className="fa fa-moon-o" aria-hidden="true"></i> </span>Dark Mode</button>
    </header>
);
}
}

const mapStateToProps = state => ({
    modestatus: state.allcountries.darkmode
})

export default connect(mapStateToProps,{activateDarkMode})(CountriesHeader); 
