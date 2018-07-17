import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import CarouselPhoto from './Components/Carousel'
import NavBar from './Components/NavBar'
import MenuHome from './Components/MenuHome'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

   render() {
    // <img src="../images/logo_loginfo.png" alt="logo muriel" className="logo_muriel"/>
   
    return (
      <div className="App">
      <div className="NavLeft">
      <NavBar />
      </div>
      <div className="MainScreen">    
        <Grid fluid>
          <Row className="firstLigne">
            <Col xs={12}  md={4} mdOffset={1} className="test">
              <CarouselPhoto />
            </Col>
            <Col xs={12} md={4}  mdOffset={1}  className="test1">
              <h1> MOSAIQUE</h1>
              <h3> Muriel Niedzwiecki </h3>
            </Col>
          </Row>
          <Row className="secondLigne">
          <Col xs={12} md={4} mdOffset={1} className="menu">
            <MenuHome />
          </Col>
          <Col xs={12} md={4} mdOffset={1} className="photoMuriel">
          <img src="../images/dev03.jpg" alt="muriel" className="logo_muriel"/>
          </Col>
          
          </Row>
        </Grid>
        </div>
      </div>
    );
  }
}

export default App;
