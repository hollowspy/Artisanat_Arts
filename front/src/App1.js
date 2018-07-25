import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import Bestiaire from './Components/Bestiaire';
import Vegetal from './Components/Vegetal';
import Deco from './Components/Deco';
import NavBar from './Components/NavBar';
import FicheBestiaire from './Components/FicheBestiaire';
import FicheTest from './Components/FicheTest';
import Admin from './Components/Admin';
import Login from './Components/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/admin" component={Login} />
          <Route exact path="/admin/:name" component={Admin} />
          
          <Grid fluid>
            <Row className="firstligne">
              <Col xs={1} sm={1} className="menuLeft">
                <NavBar />
              </Col>
              <Col xs={10} md={10}>
                <Route exact path="/" component={Home} />
                <Route exact path="/bestiaire" component={Bestiaire} />
                <Route exact path="/bestiaire/:id" component={FicheTest} />
                <Route exact path="/vegetal" component={Vegetal} />
                <Route exact path="/deco" component={Deco} />
              </Col>
            </Row>
          </Grid>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
