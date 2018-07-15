import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bestiaire: [],
    };
  }
  componentDidMount() {
    console.log('je rentre dans le fetch');
    fetch('/bestiaire')
      .then(res => res.json())
      .then(result => this.setState({ bestiaire: result }));
  }

  render() {
    const bestiaire = this.state.bestiaire;
    console.log(bestiaire);
    return (
      <div className="App">
        <Grid fluid>
          <Row className="titleNav">
            <Col xs={1} className="col1">
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
            </Col>
            <Col fluid xs={11} className="col10">
              <div className="acceuil"> Ici le reste de la page d'acceuil</div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
