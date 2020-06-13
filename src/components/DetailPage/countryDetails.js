import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import { Link} from "react-router-dom";
import { connect } from 'react-redux';
import props from 'prop-types';
import {getsingleCountry} from '../../actions/getActions'
class Country extends Component {

    componentDidMount() {
        console.log(this.props.match.params.code);
        this.props.getsingleCountry(this.props.match.params.code)
        
    }

    showCountry =(code)=>{
        this.props.history.push({
            pathname:`/countries/${code}`,
        })
         this.props.getsingleCountry(code)
    }

    render() {

        return (
            <div className= "country-deatils-wrapper">
                <Link to='/' style={{ textDecoration: 'none', color: 'hsl(200, 15%, 8%)' }}><button className="btn white-btn back-btn">
                    <i className="fa fa-long-arrow-left fa-sm"> </i>
            Back</button></Link>
                {
                    <div className="country-details-outer">
                        <div className="country-details-container">
                            <div className="country-details-flag">
                                <img src={this.props.singleCountry.flag} alt="country flag" />
                            </div>
                            <div className="country-details-outer-block">
                                <div className="country-name-title">
                                    <h3><b>{this.props.singleCountry.name}</b></h3>
                                </div>
                                <div className="country-summary-div">
                                    <div className="summary-left-inner-div">
                                        <div><b>Native Name:</b> {this.props.singleCountry.nativeName}</div>
                                        <NumberFormat value={this.props.singleCountry.population} displayType={'text'} thousandSeparator={true} renderText={value => <div><b>Population:</b> {value}</div>} />
                                        <div><b>Region:</b> {this.props.singleCountry.region}</div>
                                        <div><b>Sub Region:</b> {this.props.singleCountry.subregion || 'none'}</div>
                                        <div><b>Capital:</b> {this.props.singleCountry.capital || 'none'}</div>
                                    </div>
                                    <div className="summary-right-inner-div">
                                        <div><b>Top Level Domain:</b> {this.props.topDomain.map((domain, index) => (
                                            <span id={index}>{domain}</span>))}
                                        </div>
                                        <div><b>Currencies:</b> {this.props.currencies.map((currency, index) => (
                                            <span id={index}>{index + 1 === this.props.currencies.length ? currency.name : currency.name + ', '}</span>))}</div>
                                        <div><b>Languages:</b> {
                                            this.props.languages.map((lang, index) => (
                                                <span>{index + 1 === this.props.languages.length ? lang.name : lang.name + ', '}</span>))}
                                        </div>
                                    </div> 
                                </div>
                                <div className={this.props.borders.length ? 'border-country-wrapper' : 'd-none'}>
                                    <div className="d-flex border-area"><b>Border Countries:</b></div>
                                    <div className="d-flex border-country-buttons">{this.props.borders.map((borderCountry, index) => (
                                        <div onClick={()=> this.showCountry(borderCountry.alpha3Code)}className="btn white-btn border-btn">{borderCountry.name}</div>
                                    ))}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    singleCountry: state.allcountries.country,
    borders:state.allcountries.borderData,
    topDomain:state.allcountries.topDomainData,
    currencies:state.allcountries.currenciesData,
    languages:state.allcountries.languagesData
})

export default connect(mapStateToProps,{getsingleCountry})(Country); 

// <Link to={`/${borderCountry.alpha3Code}`} key={borderCountry.alpha3Code} 
// onClick={()=>this.props.getsingleCountry(borderCountry.alpha3Code)}style={{ textDecoration: 'none', color:'hsl(200, 15%, 8%)'}}
//     className="btn white-btn border-btn">