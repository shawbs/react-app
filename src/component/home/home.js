import React, { Component } from 'react';
import {
	Link
} from 'react-router';
import {
	Button
} from 'react-bootstrap';

import logo from '../../logo.svg';


export default class HomeComponent extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Button bsStyle="info">
          	<Link to="/login" >to login</Link>
          </Button>
        </p>
      </div>
    );
  }
}

 
