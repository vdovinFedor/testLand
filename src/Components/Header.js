import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      show: false,
      username: ""
    };
  }
  handleSubmit() {
    this.setState({ show: !this.state.show });
  }

  handleNameChange(event) {
    this.setState({ username: event.target.value });
  }
  render() {
    console.log(this.state.username);
    return (
      <div class="container">
        {!this.state.show && (
          <div>
            <p className="lead text-muted">Please, type your name down below</p>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={this.state.username}
                onChange={this.handleNameChange}
              />
              <p>
                <a
                  href="#"
                  className="btn btn-primary my-2"
                  onClick={this.handleSubmit}
                >
                  Login
                </a>
                <a href="#" className="btn btn-secondary my-2">
                  Exit
                </a>
              </p>
            </form>
          </div>
        )}
        {this.state.show && (
          <div>
            <p className="lead text-muted">Привет, {this.state.username}</p>
            <p>
              <a
                href="#"
                className="btn btn-secondary my-2"
                onClick={this.handleSubmit}
              >
                Logout
              </a>
            </p>
          </div>
        )}
      </div>
    );
  }
}

//<Button bsStyle='success'>Login</Button>
export default Header;
