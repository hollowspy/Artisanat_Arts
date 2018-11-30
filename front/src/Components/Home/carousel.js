import React, {Component} from 'react';
import {Carousel, Container, Row, Col} from 'react-bootstrap';
import _ from 'lodash';
import './carousel.css'

class CarouselHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            srcPhoto: []

        };
    }

    componentDidMount() {
        fetch('http://localhost:4000/api/carousel', {
                method: 'POST',
                headers: new Headers({'Content-Type': 'application/json'})
            })
            .then(res => res.json())
            .then(result => this.setState({srcPhoto: result}))
        
    }

    render() {
        const {srcPhoto} = this.state
        
        // console.log('test source', srcPhoto[0].source)
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col xs={12} className="containerCarousel">
                        {!_.isEmpty(srcPhoto) && <Carousel>
                            <Carousel.Item>
                                <img className="photoCarousel" src={srcPhoto[0].source} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="photoCarousel" src={srcPhoto[1].source} alt="Second slide"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="photoCarousel" src={srcPhoto[2].source} alt="Third slide"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="photoCarousel" src={srcPhoto[3].source} alt="Fourth slide"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="photoCarousel" src={srcPhoto[4].source} alt="Fifth slide"/>
                            </Carousel.Item>
                        </Carousel>
                        }
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        );
    }
}

export default CarouselHome;