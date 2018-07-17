import React, { Component } from 'react'

class MenuHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul>
        <li> Bestiaire </li>
        <li> Vegetal </li>
        <li> Deco </li>
      </ul>
    );
  }
}

export default MenuHome;
