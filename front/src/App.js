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
              <Route exact path="/" component={Home} />
              <Route exact path="/bestiaire" component={Bestiaire} />
              <Route exact path="/bestiaire/:id" component={FicheTest} />
              <Route exact path="/vegetal" component={Vegetal} />
              <Route exact path="/deco" component={Deco} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
