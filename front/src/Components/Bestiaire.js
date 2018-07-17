import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class Bestiaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bestiaire : {}
    }
  }

  componentDidMount() {
    console.log('je rentre dans le fetch de bestiaire');
    fetch('/bestiaire')
      .then(res => res.json())
      .then(result => this.setState({ bestiaire: result }));
  }


  render() { 
    const {bestiaire} = this.state
    console.log('page bestaire', {bestiaire})
    return ( 
      <div>
      {!_.isEmpty(bestiaire)&&
        bestiaire.map(tableau => (
          <ul key={tableau.id}>
            <Link to={`bestiaire/${tableau.id}`}>
            <li>{tableau.name}</li>
            <li>{tableau.materials}</li>
            </Link>
          </ul>

        ))}
      </div>
     );
  }
}
 
export default Bestiaire;