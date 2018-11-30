import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap';
import './FormModal.css'

class FormBestiaire extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const close = this.props.close
        const oeuvre = this.props.oeuvre
        console.log('oeuvre modal', oeuvre)
        return (
            <div>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={close}>
              Close
            </Button>
            </Modal.Footer>
            </div>
        );
    }
}

export default FormBestiaire;