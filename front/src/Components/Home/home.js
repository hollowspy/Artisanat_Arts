import React, {Component} from 'react';
import ColumArtisanat from './column-artisanat'
import Menu from './menu'
import Carousel from './carousel'
import CardMuriel from './card-muriel'
import FormContact from './form-contact'
import {Container , Row, Col} from 'react-bootstrap';
import './home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : 'Muriel NIEDZWIECKI'
        };
    }
    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col xs={1} className="leftColum"> <ColumArtisanat></ColumArtisanat></Col>
                        <Col xs={11}>  
                            <Container fluid>
                                <Row>
                                    <Col xs={10} md={{ span: 8, offset: 2 }}>
                                        <h1>{this.state.title}</h1>
                                        <h1>Mosaique</h1>
                                    </Col>
                                </Row>
                            </Container>
                            <Menu></Menu>
                            <Carousel></Carousel>
                            <CardMuriel></CardMuriel>
                            <FormContact></FormContact>
                        </Col>
                    </Row>
                </Container>
              
              
            </div>

        );
    }
}

export default Home;