import React, {Component} from 'react';
import ColumArtisanat from './column-artisanat'
import Menu from './menu'
// import Carousel from './carousel'
import Carousel from '../../Containers/Home/Carousel'
import CardMuriel from './card-muriel'
import FormContact from './form-contact'
import {Container, Row, Col} from 'react-bootstrap';
import './home.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Muriel NIEDZWIECKI'
        };
    }
    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col xs={1} className="leftColum">
                            <ColumArtisanat></ColumArtisanat>
                        </Col>
                        <Col xs={11}>
                            <Container fluid>
                                <Row>
                                    <Col
                                        xs={10}
                                        md={{
                                        span: 8,
                                        offset: 2
                                    }}>
                                        <h1>{this.state.title}</h1>
                                        <h1>Mosaique</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} className="containerMenuCarousel">
                                        <Menu></Menu>
                                        <Carousel></Carousel>
                                    </Col>
                                </Row>
                                <Row className="container-muriel">
                                    <Col md={7}>
                                        <Container fluid className="photoAcceuilSection">
                                            <Row>
                                                <Col md={6}>
                                                    <figure className="snip1539"><img src="http://localhost:4000/images/accueil/7215.jpg" alt="sample73"/></figure>
                                                </Col>
                                                <Col md={6}>
                                                    <figure className="snip1539"><img src="http://localhost:4000/images/accueil/7215.jpg" alt="sample73"/></figure>
                                                </Col>
                                                <Col md={6}>
                                                    <figure className="snip1539"><img src="http://localhost:4000/images/accueil/7215.jpg" alt="sample73"/></figure>
                                                </Col>
                                                <Col md={6}>
                                                    <figure className="snip1539"><img src="http://localhost:4000/images/accueil/7215.jpg" alt="sample73"/></figure>
                                                </Col>

                                            </Row>

                                        </Container>

                                    </Col>
                                    <Col md={4} className="cardMuriel">
                                    <CardMuriel></CardMuriel>
                                    </Col>

                                </Row>
                                <Row>
                                <Col xs={12}>
                                <FormContact></FormContact>
                                </Col>
                                </Row>
                            </Container>
                           
                           
                        </Col>
                    </Row>
                </Container>

            </div>

        );
    }
}

export default Home;