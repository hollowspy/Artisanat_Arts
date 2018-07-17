import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import CarouselPhoto from './Carousel';
import NavBar from './NavBar';
import MenuHome from './MenuHome';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Home">
        <div className="NavLeft">
          <NavBar />
        </div>
        <div>
          <div className="Mainscreen">
            <Grid className="grid">
              <Row className="firstLigne">
                <Col xs={12} md={4} mdOffset={1}>
                  <CarouselPhoto />
                </Col>
                <Col xs={12} md={6} mdOffset={1}>
                  <div className="Title_Muriel">
                    <h1> MOSAIQUE </h1>
                    <h2> Muriel Niedzwiecki </h2>
                  </div>
                </Col>
              </Row>
              <Row className="secondLigne">
                <Col xs={12} md={5} mdOffset={1}>
                  <MenuHome />
                </Col>
                <Col xs={12} md={5} mdOffset={1}>
                <img src="../images/dev03.jpg" alt="logo muriel" className="logo_muriel"/>
              </Col>
              </Row>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
