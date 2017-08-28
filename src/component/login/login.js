import React, { Component } from 'react';
import {
	Link,
	IndexLink
} from 'react-router';
import {
	Button
} from 'react-bootstrap';

export default class LoginComponent extends Component {
  render() {
    return (
      <div className="login-page">
        <h1>login</h1>
        <p className="App-intro">
          <Button bsStyle="info">
          	<IndexLink to="/" >to home</IndexLink>
          </Button>
        </p>
      </div>
    );
  }
}

 
