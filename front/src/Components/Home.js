import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CarouselPhoto from './Carousel';
import NavBar from './NavBar';
import MenuHome from './MenuHome';
import '../style/Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="Mainscreen">
          <Grid className="grid">
            <Row className="firstLigne">
              <Col xs={12} xsOffset={1} md={4} mdOffset={1}>
                <h1> MOSAIQUE</h1>
              </Col>
              <Col xs={12} xsOffset={1} md={4} mdOffset={1}>
                <h3> Muriel NIEDZWIECKI </h3>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={10} mdOffset={1}>
                <MenuHome />
              </Col>
            </Row>
            <Row className="SecondLigne">
              <Col xs={10}  md={6}>
                <CarouselPhoto />
              </Col>
              <Col xs={12} md={5} mdOffset={1}>
                <img
                  src="../images/dev03.jpg"
                  alt="logo muriel"
                  className="logo_muriel"
                  responsive/>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Home;
