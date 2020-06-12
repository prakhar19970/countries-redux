import React from 'react';
import CountriesHeader from './components/Header/countriesHeader'
import Countries from "./components/Homepage/countries"
import Country from "./components/DetailPage/countryDetails"
import './App.css';
import { Provider } from 'react-redux'; 
import store from './store';
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
       
       <div className="countries-wrapper">
      <CountriesHeader /> 
      {/* <Route exact path="/countries/:code" render={(props) => <Country {...props} darkMode={this.state.darkMode}  key={window.location.pathname}/>}/> */}
      <Route exact path='/'><Countries/></Route>
      </div>
     
    </Provider>
     </BrowserRouter>
  );
}

export default App;
