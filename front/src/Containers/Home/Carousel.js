import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchDatas} from '../../Actions/FetchData';
import {Carousel, Container, Row, Col} from 'react-bootstrap';
import './Carousel.css'
import _ from 'lodash';

const MapStateToProps = state => {
    return {carousel: state.Carousel}
}


class CarouselHome extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            carousel : []
         };
    }

    componentDidMount() {
        this.props.dispatch(fetchDatas('carousel'))
        
        
    }


    render() {
        const carousel = this.props.carousel.datas
        console.log('carousel', carousel)
             
        return (
            <div>
            <Container fluid>
            <Row>
                <Col xs={12} className="containerCarousel">
                {!_.isEmpty(carousel) && <Carousel>
                    <Carousel.Item>
                        <img className="photoCarousel" src={carousel[0].Asource} alt="First slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="photoCarousel" src={carousel[1].Asource} alt="Second slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="photoCarousel" src={carousel[2].Asource} alt="Third slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="photoCarousel" src={carousel[3].Asource} alt="Fourth slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="photoCarousel" src={carousel[4].Asource} alt="Fifth slide"/>
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

export default connect(MapStateToProps)(CarouselHome);