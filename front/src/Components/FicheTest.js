import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import _ from 'lodash';
import '../style/FicheTest.css';
// import { baseUrl } from "./config";

class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fiche: {},
    };
  }

  componentDidMount() {
    let idTableau = this.props.match.params.id;
    console.log(idTableau);
    console.log('je rentre dans la fiche voulue');
    fetch(`/bestiaire/${idTableau}`)
      .then(res => res.json())
      .then(result => this.setState({ fiche: result }));
  }

  render() {
    const { fiche } = this.state;
    console.log('fiche', { fiche });
    const settings = {
      customPaging: function(i) {
        return (
          <a>
            <img src={`${fiche[0].photo_principale}`} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        {!_.isEmpty(fiche) && (
          <div>
            <h2>Fade</h2>
            <Slider {...settings}>
              <div>
                <img src={fiche[0].photo_principale} className="photo" />
              </div>
              <div>
                <img src={fiche[0].photo_annexe2} className="photo"/>
              </div>
              <div>
                <img src={fiche[0].photo_annexe3} className="photo"/>
              </div>
              <div>
                <img src={fiche[0].photo_annexe2} className="photo"/>
              </div>
            </Slider>
          </div>
        )}
      </div>
    );
  }
}

export default SimpleSlider;
