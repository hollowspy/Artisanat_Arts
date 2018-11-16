import React, {Component} from 'react';
import './App.css';
import Home from './Components/Home/home'
// import Bestiaire from './Components/Category/bestiaire';
import Bestiaire from './Containers/Bestiaire';
import FicheBestiaire from './Components/Category/ficheBestiaire';
import Vegetal from './Components/Category/vegetal';
import Deco from './Components/Category/deco';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <div className="HomePage">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/bestiaire" component={Bestiaire}/>
                            <Route exact path="/bestiaire/:id" component={FicheBestiaire}/>
                            <Route exact path="/vegetal" component={Vegetal}/>
                            <Route exact path="/deco" component={Deco}/>
                        </Switch>
                    </BrowserRouter>

                </div>
            </div>

        );
    }
}

export default App;
