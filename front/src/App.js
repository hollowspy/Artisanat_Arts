import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import Bestiaire from './Components/Bestiaire';
import Vegetal from './Components/Vegetal';
import Deco from './Components/Deco';
import NavBar from './Components/NavBar';
import FicheBestiaire from './Components/FicheBestiaire';
import FicheTest from './Components/FicheTest';
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
    
    
      <div className="globalContainer">
        <div className="leftContainer">
          <NavBar />
        </div>
        <div className="mainContainer">
          <BrowserRouter>
            <Switch>
             
              <Route exact path="/bestiaire" component={Bestiaire} />
              <Route exact path="/bestiaire/:id" component={FicheTest} />
              <Route exact path="/vegetal" component={Vegetal} />
              <Route exact path="/deco" component={Login} />
             
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    
    );
  }
}

export default App;
