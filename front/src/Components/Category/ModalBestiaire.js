import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ModalBestiaire.css'

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {top: `${top}%`, left: `${left}%`, transform: `translate(-${top}%, -${left}%)`, margin : 'auto'};
}

class ModalBestiaire extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const srcPhoto = this.props.srcPhotoPrincipale
        
        console.log(srcPhoto)

        return (
            <div>
                <Container style={getModalStyle()} className="styleModal">
                    <Row>
                        <Col xs={12}> 
                        <div>
                        <img src={srcPhoto} alt="modal" className="photoModal" />
                        <FontAwesomeIcon className="close" onClick={this.props.close} icon="window-close" size="6x" style={{width:'50px', height:'50px', opacity:'0.5'}}/>
                         </div>
                         </Col>
                    </Row>
                    
                </Container>
              
            </div>

        );
    }
}

export default ModalBestiaire;
