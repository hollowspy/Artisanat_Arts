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
            
          </Grid>
        </div>
      </div>
    );
  }
}

export default Home;
