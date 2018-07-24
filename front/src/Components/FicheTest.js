import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import _ from 'lodash';
import '../style/FicheTest.css';
import { Grid, Row, Col, Popover, Tooltip, Modal, Button } from 'react-bootstrap';
// import { baseUrl } from "./config";

class SimpleSlider extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      fiche: {},
      source: '',
      show: false,
    };
    this.showPhoto = this.showPhoto.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    let idTableau = this.props.match.params.id;
    console.log(idTableau);
    console.log('je rentre dans la fiche voulue');
    fetch(`/bestiaire/${idTableau}`)
      .then(res => res.json())
      .then(result =>
        this.setState({
          fiche: result,
          source: result[0].photo_principale,
        })
      );
  }

  showPhoto(url) {
    this.setState({
      source: url,
    });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const { fiche, source } = this.state;
    console.log('fiche', { fiche });

    // const popover = (
    //   <Popover id="modal-popover" title="popover">
    //     very popover. such engagement
    //   </Popover>
    // );
    // const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    return (
      <div>
        {!_.isEmpty(fiche) && (
          <div>
            <h2>Fade</h2>
            <Grid>
              <Row className="firstligne">
                <Col xs={12} md={6}>
                  <img
                    onClick={this.handleShow}
                    src={source}
                    className="photo_principale"
                  />
                  <Modal show={this.state.show} onHide={this.handleClose} dialogClassName="custom-modal">
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <h4>phoo dans modal ! </h4>
                      <img src={source} className="photo_modal"/>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </Col>
                <Col xs={12} md={6}>
                <ul>
                  <li> Nom : {fiche[0].name}</li>
                  <li> Matériaux utilisés : {fiche[0].materials}</li>
                  <li> Largeur : {fiche[0].width} / Hauteur : {fiche[0].height}</li>
                  <li> {fiche[0].reproduction}</li>
                </ul>
                </Col>
              </Row>
              <Col xs={12}>
                <div className="miniature">
                  <div>
                    <img
                      src={fiche[0].photo_principale}
                      className="photo"
                      onClick={() => {
                        this.showPhoto(fiche[0].photo_principale);
                      }}
                    />
                  </div>
                  <div>
                    <img
                      src={fiche[0].photo_annexe2}
                      className="photo"
                      onClick={() => {
                        this.showPhoto(fiche[0].photo_annexe2);
                      }}
                    />
                  </div>
                  <div>
                    <img
                      src={fiche[0].photo_annexe3}
                      className="photo"
                      onClick={() => {
                        this.showPhoto(fiche[0].photo_annexe3);
                      }}
                    />
                  </div>
                  <div>
                    <img
                      src={fiche[0].photo_annexe2}
                      className="photo"
                      onClick={() => {
                        this.showPhoto(fiche[0].photo_annexe2);
                      }}
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
