import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import CompanyList from "./Components/CompanyList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="Head" />
        <CompanyList className='CompanyList' />
        <Footer />
      </div>
    );
  }
}
//<Button bsStyle='success'>hi</Button>
export default App;
