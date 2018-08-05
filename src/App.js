import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <Button bsStyle='success'>hi</Button>
        <Footer />
      </div>
    );
  }
}

export default App;
