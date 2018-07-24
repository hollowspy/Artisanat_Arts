import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Popover,
  Tooltip,
  Modal,
  Button,
} from 'react-bootstrap';
import _ from 'lodash';
import '../style/Vegetal.css';

class Vegetal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vegetal: {},
      source: '',
      show: false,
    

    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    console.log('je rentre dans le fetch de vegetal');
    fetch('/vegetal')
      .then(res => res.json())
      .then(result =>
        this.setState({
          vegetal: result,
        })
      );
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(e, index) {
    this.setState({ show: index });
  }

  render() {
    const { vegetal } = this.state;
    console.log('page vegetal', vegetal);

    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    return (
      <div>
        <h1> Le vegetal </h1>
        <Grid>
          <Row>
            {!_.isEmpty(vegetal) &&
              vegetal.map((tableau, index) => (
                <div key={tableau.id}>
                  <Col xs={12} sm={4}>
                    <div>
                      <h2>{tableau.name}</h2>
                      <img
                        src={tableau.photo_principale}
                        alt="tableau"
                        className="photo_tableau"
                        onClick={e=>this.handleShow(e,index)}
                      />
                      <p>{tableau.name}</p>
                      <Modal
                        id={tableau.id}
                        show={this.state.show === index}
                        onHide={this.handleClose}
                        dialogClassName="custom-modal"
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>{tableau.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h4>phoo dans modal ! </h4>
                          <img src={tableau.photo_principale} className="photo_modal" />
                          <ul>
                          <li> Nom : {tableau.name}</li>
                          <li> Materiaux utilisés : {tableau.materials}</li>
                          <li> Description : {tableau.reproduction}</li>
                          </ul>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button onClick={this.handleClose}>Close</Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </Col>
                </div>
              ))}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Vegetal;
