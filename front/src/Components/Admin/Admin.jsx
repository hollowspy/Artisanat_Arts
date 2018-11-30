import React, {Component} from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap';
import AdminBestiaire from '../../Containers/Admin/AdminBestiaire'
import AdminVegetal from '../../Containers/Admin/AdminVegetal'
import './Admin.css'

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBestiaire: false,
            showVegetal: false,
            showDeco: false,
            showCarrousel: false
        };
    }

    onShowCategory = (cateogry) =>{
        console.log('je rentre dans onshow')
        let stateActuel = {...this.state}
        switch (cateogry) {
            case 'bestiaire':
            (stateActuel.showBestiaire === false)
                ? stateActuel.showBestiaire = true
                : stateActuel.showBestiaire = false;
            stateActuel.showVegetal = false;
            stateActuel.showDeco = false; 
            stateActuel.showCarrousel = false;
            this.setState({
                showBestiaire : stateActuel.showBestiaire,
                showVegetal : stateActuel.showVegetal,
                showDeco : stateActuel.showDeco,
                showCarrousel : stateActuel.showCarrousel
            })
            break;
            case 'vegetal':
            (stateActuel.showVegetal === false)
                ? stateActuel.showVegetal = true
                : stateActuel.showVegetal = false;
            stateActuel.showBestiaire = false;
            stateActuel.showDeco = false; 
            stateActuel.showCarrousel = false;
            this.setState({
                showBestiaire : stateActuel.showBestiaire,
                showVegetal : stateActuel.showVegetal,
                showDeco : stateActuel.showDeco,
                showCarrousel : stateActuel.showCarrousel
            })
            break;
            case 'deco':
            (stateActuel.showDeco === false)
                ? stateActuel.showDeco = true
                : stateActuel.showDeco = false;
            stateActuel.showBestiaire = false;
            stateActuel.showVegetal = false; 
            stateActuel.showCarrousel = false;
            this.setState({
                showBestiaire : stateActuel.showBestiaire,
                showVegetal : stateActuel.showVegetal,
                showDeco : stateActuel.showDeco,
                showCarrousel : stateActuel.showCarrousel
            })
            break;
            case 'carrousel':
            (stateActuel.showCarrousel === false)
                ? stateActuel.showCarrousel = true
                : stateActuel.showCarrousel = false;
            stateActuel.showBestiaire = false;
            stateActuel.showVegetal = false; 
            stateActuel.showDeco = false;
            this.setState({
                showBestiaire : stateActuel.showBestiaire,
                showVegetal : stateActuel.showVegetal,
                showDeco : stateActuel.showDeco,
                showCarrousel : stateActuel.showCarrousel
            })
            break;
            default:
            stateActuel = {
                showBestiaire : false,
                showVegetal : false, 
                showDeco : false,
                showCarrousel : false
            }
                break;
        }
    }
    
    render() {
        
        const showBestiaire = this.state.showBestiaire;
        const showVegetal = this.state.showVegetal;
        const showDeco = this.state.showDeco;
        const showCarrousel = this.state.showCarrousel;
        return (
            <div className="containerAdmin">
                <div>
                    Administration
                </div>
                <Container fluid>
                    <Row>
                        <Col xs={3}>
                            <Button onClick={()=> {this.onShowCategory('bestiaire')}} variant="primary" size="lg">Bestiaire</Button>
                        </Col>
                        <Col xs={3}>
                            <Button  onClick={()=> {this.onShowCategory('vegetal')}} variant="success" size="lg">Vegetal</Button>
                        </Col>
                        <Col xs={3}>
                            <Button  onClick={()=> {this.onShowCategory('deco')}} variant="warning" size="lg">Deco</Button>
                        </Col>
                        <Col xs={3}>
                            <Button  onClick={()=> {this.onShowCategory('carrousel')}} variant="info" size="lg">Carrousel</Button>
                        </Col>
                    </Row>
                </Container>
                <Row>


                    <Col xs={12}>
                      {showBestiaire &&
                        <div>
                        <AdminBestiaire/>
                        </div>}
                    </Col>
                    <Col xs={12}>
                    {showVegetal &&
                        <div>
                        <AdminVegetal/>
                        </div>}
                    </Col>

                    <Col xs={12}>
                    {showDeco &&
                        <div>
                        Affiche Deco
                        </div>}
                    </Col>

                    <Col xs={12}>
                    {showCarrousel &&
                        <div>
                        Affiche Carrousel
                        </div>}
                    </Col>


                </Row>

            </div>

        );
    }
}

export default Admin;