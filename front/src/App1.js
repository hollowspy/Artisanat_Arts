import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import Bestiaire from './Components/Bestiaire';
import Vegetal from './Components/Vegetal';
import Deco from './Components/Deco';
import NavBar from './Components/NavBar';
import FicheBestiaire from './Components/FicheBestiaire';
import FicheTest from './Components/FicheTest';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid fluid>
        <Row className="firstligne">
          <Col xs={12} sm={1} className="menuLeft">
            <NavBar />
          </Col>
          <Col xs={12} md={11}>
         <BrowserRouter>
         <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/bestiaire" component={Bestiaire} />
         <Route exact path="/bestiaire/:id" component={FicheTest} />
         <Route exact path="/vegetal" component={Vegetal} />
         <Route exact path="/deco" component={Deco} />
       </Switch>
          </BrowserRouter>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
