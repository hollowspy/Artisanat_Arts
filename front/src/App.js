import React, {Component} from 'react';
import './App.css';
import Home from './Components/Home/home'
import Category from './Components/Category/category'
import {BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends Component {
    render() {
        return (
        <div>
            <div className="HomePage">
                <BrowserRouter>
                    <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/bestiaire" component={Category}/>
                            <Route exact path="/bestiaire/:id" component={Category}/>
                            <Route exact path="/vegetal" component={Category}/>
                            <Route exact path="/deco" component={Category}/>
                        </Switch>
                </BrowserRouter>
            </div>
        </div>

        );
    }
}

export default App;
