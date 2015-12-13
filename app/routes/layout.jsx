import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Layout extends Component {
  render() {
    return <div>
      <h2>Layout</h2>
      <ul>
         <li><Link to='/'>Home</Link></li>
         <li><Link to='/about'>About</Link></li>
       </ul>
      {this.props.children}
    </div>
  }
}
