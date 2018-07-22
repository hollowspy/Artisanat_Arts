import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import _ from 'lodash';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";


class FicheBestiaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fiche: {},
    };
  }

  componentDidMount() {
    let idTableau = this.props.match.params.id;
    console.log(idTableau);
    console.log('je rentre dans la fiche voulue');
    fetch(`/bestiaire/${idTableau}`)
      .then(res => res.json())
      .then(result => this.setState({ fiche: result }));
  }

  render() {
    const { fiche } = this.state;
    console.log('fiche', { fiche });
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              {!_.isEmpty(fiche) && (
                <div>
                  <h1>{fiche[0].name}</h1>
                  <img
                    src={fiche[0].photo_principale}
                    alt="logo muriel"
                    className="logo_muriel"
                    responsive
                  />
                </div>
              )}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default FicheBestiaire;
