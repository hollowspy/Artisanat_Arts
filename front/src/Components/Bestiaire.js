import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

class Bestiaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bestiaire: {},
    };
  }

  componentDidMount() {
    console.log('je rentre dans le fetch de bestiaire');
    fetch('/bestiaire')
      .then(res => res.json())
      .then(result => this.setState({ bestiaire: result }));
  }

  render() {
    const { bestiaire } = this.state;
    console.log('page bestaire', { bestiaire });
    return (
      <div>
        <h1>Le Bestiaire </h1>
        <Grid>
          <Row>
            {!_.isEmpty(bestiaire) &&
              bestiaire.map(tableau => (
                <div>
                  <Col xs={12} md={6}>
                    <ul key={tableau.id}>
                      <Link to={`bestiaire/${tableau.id}`}>
                        <li>{tableau.name}</li>
                        <li>{tableau.materials}</li>
                      </Link>
                    </ul>
                  </Col>

                  <Col xs={12} md={6}>
                  <img
                  src={tableau.photo_principale}
                  alt="logo muriel"
                  className="logo_muriel"
                  responsive/>
                  </Col>
                </div>
              ))}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Bestiaire;
