import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../style/MenuHome.css';

class MenuHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul className="menu">
        <Link to="/bestiaire"><li> Bestiaire </li></Link>
        <Link to="/vegetal"><li> vegetal </li></Link>
        <Link to="/deco"><li> deco </li></Link>
      </ul>
    );
  }
}

export default MenuHome;
