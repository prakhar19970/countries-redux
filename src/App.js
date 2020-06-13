import React from 'react';
import CountriesHeader from './components/Header/countriesHeader'
import Countries from "./components/Homepage/countries"
import Country from "./components/DetailPage/countryDetails"
import './App.css';
import props from 'prop-types';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Provider } from 'react-redux'; 
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>  
       <div className="countries-wrapper">
      <CountriesHeader /> 
      <Switch>
      <Route exact path="/countries/:code" key={window.location.pathname} render={(props) => <Country {...props} />} />
      <Route exact path='/'><Countries/></Route>
      </Switch>
      </div>
     </BrowserRouter>
     </Provider >
  );
}

export default App;
