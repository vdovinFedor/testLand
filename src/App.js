import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";

import { connect } from 'react-redux'
import CompanyList from "./Components/CompanyList";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="Head">
        <Header  />
      </div>
        <CompanyList className='CompanyList' />
        <Footer />
      </div>
    );
  }
}
//
export default App;
