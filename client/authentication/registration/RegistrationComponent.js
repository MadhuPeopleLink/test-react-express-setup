import React from 'react';
import { Link } from 'react-router';

export default class RegistrationComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>This is Registration Component</h1>
        <form>
          <input type="text" name="username" placeholder="username"/>
          <input type="password" name="password" placeholder="password"/>
          <input type="submit" value="Login"/>
        </form>
      </div>
    );
  }
}