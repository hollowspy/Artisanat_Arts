import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import _ from 'lodash';
import '../style/FicheTest.css';
import { Grid, Row, Col } from 'react-bootstrap';
// import { baseUrl } from "./config";

class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fiche: {},
      source : ''
    };
    this.showPhoto = this.showPhoto.bind(this);
  }

  componentDidMount() {
    let idTableau = this.props.match.params.id;
    console.log(idTableau);
    console.log('je rentre dans la fiche voulue');
    fetch(`/bestiaire/${idTableau}`)
      .then(res => res.json())
      .then(result => this.setState({ 
        fiche: result, 
        source : result[0].photo_principale
       }));
  }

  showPhoto(url) {
    this.setState({
      source : url
    })
  }

  render() {
    const { fiche, source } = this.state;
    console.log('fiche', { fiche });

    return (
      <div>
        {!_.isEmpty(fiche) && (
          <div>
            <h2>Fade</h2>
            <Grid>
              <Row className="firstligne">
                <Col xs={12}>
                  <img
                    src={source}
                    className="photo_principale"
                  />
                </Col>
              </Row>
              <Col xs={12}>
                <div className="miniature">
                  <div>
                    <img
                      src={fiche[0].photo_principale}
                      className="photo"
                      onClick={() => {this.showPhoto(fiche[0].photo_principale)}}
                    />
                  </div>
                  <div>
                    <img
                      src={fiche[0].photo_annexe2}
                      className="photo"
                      onClick={() => {this.showPhoto(fiche[0].photo_annexe2)}}
                    />
                  </div>
                  <div>
                    <img
                      src={fiche[0].photo_annexe3}
                      className="photo"
                      onClick={() => {this.showPhoto(fiche[0].photo_annexe3)}}
                    />
                  </div>
                  <div>
                    <img
                      src={fiche[0].photo_annexe2}
                      className="photo"
                      onClick={() => {this.showPhoto(fiche[0].photo_annexe2)}}
                    />
                  </div>
                </div>
              </Col>
            </Grid>
          </div>
        )}
      </div>
    );
  }
}

export default SimpleSlider;
