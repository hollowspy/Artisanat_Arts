import React, { Component } from 'react';
import './NavBar.css';


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="blockBackground">
      <div className="title">
      <div className="word1">
        <p> A </p>
        <p> R</p>
        <p> T </p>
        <p> I </p>
        <p> S </p>
        <p> A </p>
        <p> N </p>
        <p> A </p>
        <p> T </p>
      </div>
      <div className="word2">
        <p> D'</p>
        <p> A </p>
        <p> R </p>
        <p> T </p>
      </div>
    </div>
  </div>
     );
  }
}
 
export default NavBar;