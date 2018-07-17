import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import Bestiaire from './Components/Bestiaire';
import Vegetal from './Components/Vegetal';
import Deco from './Components/Deco';
import NavBar from './Components/NavBar';
import FicheBestiaire from './Components/FicheBestiaire'
import { BrowserRouter, Route, Switch } from 'react-router-dom';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
  

    return (
      <div>
     
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/bestiaire" component={Bestiaire} />
      <Route exact path="/bestiaire/:id" component={FicheBestiaire} />
      <Route exact path="/vegetal" component={Vegetal} />
      <Route exact path="/deco" component={Deco} />
      </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
