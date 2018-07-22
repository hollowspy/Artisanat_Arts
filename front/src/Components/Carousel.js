import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import _ from 'lodash';
import '../style/Carousel.css';


class CarouselPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded : false,
      srcPhoto: []
    };
  }

  componentDidMount() {
    console.log('je rentre dans le fetch');
    fetch('http://localhost:4000/')
      .then(res => res.json())
      .then(result => this.setState({ srcPhoto: result }));
  }

  render() {
    const {srcPhoto}  = this.state;
    console.log('test', {srcPhoto})
    
    return (
      <div>
        {!_.isEmpty(srcPhoto) &&
          <Carousel>
            <Carousel.Item>
              <img className="photo_carousel" alt="900x500" src={srcPhoto[0].source} />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img className="photo_carousel" alt="900x500" src={srcPhoto[1].source} />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img className="photo_carousel" alt="900x500" src={srcPhoto[0].source} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
          </Carousel>
        }
      </div>
    );
  }
}

export default CarouselPhoto;
