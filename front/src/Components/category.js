import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import Bestiaire from '../Containers/Bestiaire';
import FormAdmin from '../Containers/FormAdmin'
import FicheBestiaire from './Category/ficheBestiaire'
// import Vegetal from './vegetal'
import Vegetal from '../Containers/Vegetal';
import Deco from './Category/deco';
import Admin from './Admin/Admin'
import NavBar from './Navbar';
import './category.css'

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col sm={1} className="leftColum">
                           <NavBar/>
                        </Col>
                        <Col sm={11} className="ContainerCategory">
                            <Switch>
                                <Route exact path="/bestiaire" component={Bestiaire}/>
                                <Route exact path="/bestiaire/:id" component={FicheBestiaire}/>
                                <Route exact path="/vegetal" component={Vegetal}/>
                                <Route exact path="/deco" component={Deco}/>
                                <Route exact path="/auth" component={FormAdmin}/>
                                <Route exact path="/admin" component={Admin}/>
                                
                            </Switch>
                        </Col>
                    </Row>
                </Container>

            </div>

        );
    }
}

export default Category;