import React, { Component } from 'react';
import _ from 'lodash';

class FicheBestiaire extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fiche : {}
     }
  }

  componentDidMount() {
    let idTableau = this.props.match.params.id;
    console.log(idTableau)
    console.log('je rentre dans la fiche voulue');
    fetch(`/bestiaire/${idTableau}`)
      .then(res => res.json())
      .then(result => this.setState({ fiche: result }));
  }

  render() {
    const {fiche} = this.state
    console.log('fiche', {fiche})
    return ( 
      <div>
      {!_.isEmpty(fiche) &&
      <div> Nom du tableau : {fiche[0].name}</div>
      }
      </div>
      
     );
  }
}
 
export default FicheBestiaire;