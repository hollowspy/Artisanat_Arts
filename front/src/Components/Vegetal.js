import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import '../style/Vegetal.css';

class Vegetal extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      vegetal : {},
     }
  }

  componentDidMount() {
    console.log('je rentre dans le fetch de vegetal');
    fetch('/vegetal')
      .then(res => res.json())
      .then(result => this.setState({ vegetal: result }));
  }

  render() { 
    const {vegetal} = this.state
    console.log('page vegetal', vegetal)
    return ( 
      <div>
      <h1> Le vegetal </h1>
      <Grid>
      <Row>
      {!_.isEmpty(vegetal) && 
        vegetal.map(tableau => (
          <div>
            <Col xs={12} sm={4}>
            <h2>{tableau.name}</h2>
            <img src={tableau.photo_principale} alt='tableau' className="photo_tableau"/>
            </Col>
          </div>

        ))}
      
      </Row>
      </Grid>
     
      
      </div>
     );
  }
}
 
export default Vegetal;