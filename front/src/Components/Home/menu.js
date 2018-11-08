import React from 'react';
import {Container , Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './menu.css'


const Menu = () => {
    return (
        <div>
        <Container>
            <Row className="buttonMenu">
            <Col xs={4} className="linkMenu">
            <Link to="/bestiaire" className="nav-link">Bestiaire</Link>
             </Col>
            <Col xs={4} className="linkMenu">
            <Link to="/vegetal" className="nav-link">Vegetal</Link>
            </Col>
            <Col xs={4} className="linkMenu">
            <Link to="/deco" className="nav-link">Deco</Link>
            </Col>
            </Row>
        </Container>
        </div>
    );
}

export default Menu;


