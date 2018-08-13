import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';


class Header extends Component {
    constructor(props){
        super(props);
        this.state ={
            show: false,
            username:''
        }

    }

    render() {
        return (
        <div class="container">
          <h1>Welcome {this.username}</h1>
          
          <p class="lead text-muted">Please, type your name down below</p>
          <input type='text'></input>
          <p>
            <a href="#" class="btn btn-primary my-2">Login</a>
            <a href="#" class="btn btn-secondary my-2">Exit</a>
          </p>
        </div>
            
        );
    }
}

//<Button bsStyle='success'>Login</Button>
export default Header;
