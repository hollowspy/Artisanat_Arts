import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './FicheBestiaire.css';
import axios from 'axios';

class FicheBestiaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ficheBestiaire: {}
        };
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        axios
            .get(`http://localhost:4000/api/bestiaire/${id}`)
            .then(res => {
                const ficheBestiaire = res.data[0];
                console.log('Fiche Bestiaire', ficheBestiaire)
                this.setState({ficheBestiaire})
            })
    }

    onReplacePhotoPrincipale(src){
        console.log("je rentre dans remplace photo principale avec l'url", src)
        let srcPhotoPrincipale = this.state.Aphoto_principale
        let ficheBestiaire = {...this.state.ficheBestiaire}
        console.log('this state', ficheBestiaire, 'srcPhotoPrincipale', srcPhotoPrincipale )
        ficheBestiaire.Aphoto_principale = src 
        console.log(ficheBestiaire)
        this.setState({
            ficheBestiaire
        })

    }

    render() {
        const {ficheBestiaire} = this.state
        return (
            <div className="ContainerFicheBestiaire">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h3 className="titleOeuvre">{ficheBestiaire.name}</h3>
                            <ul>
                                <div className="cardOeuvre">
                                    <div>
                                        <li>{ficheBestiaire.materials}</li>
                                        <li>{ficheBestiaire.width}
                                            cm de large</li>
                                        <li>{ficheBestiaire.height}
                                            cm de gaut</li>
                                        <li>{ficheBestiaire.reproduction}</li>
                                    </div>

                                    <div>
                                        <img
                                            className="photoPrincipale"
                                            src={ficheBestiaire.Aphoto_principale}
                                            alt="Principale"/>
                                        <div className="clickImage">Cliquez sur l'image pour agrandir</div>
                                    </div>
                                </div>

                            </ul>
                        </Col>
                    </Row>

                </Container>
                <Container fluid>
                    <Row>
                        <Col sm={3} className="containerPhotos">
                            <img src={ficheBestiaire.Aphoto_annexe2} alt="annexe" className="photoAnnexe" onClick={()=>{this.onReplacePhotoPrincipale(ficheBestiaire.Aphoto_annexe2)}}/>
                        </Col>
                        <Col sm={3} className="containerPhotos">
                            <img src={ficheBestiaire.Aphoto_annexe3} alt="annexe" className="photoAnnexe" onClick={()=>{this.onReplacePhotoPrincipale(ficheBestiaire.Aphoto_annexe3)}}/>
                        </Col>
                        <Col sm={3} className="containerPhotos">
                            <img src={ficheBestiaire.Aphoto_annexe4} alt="annexe" className="photoAnnexe" onClick={()=>{this.onReplacePhotoPrincipale(ficheBestiaire.Aphoto_annexe4)}}/>
                        </Col>
                        <Col sm={3} className="containerPhotos">
                            <img src={ficheBestiaire.Aphoto_annexe5} alt="annexe" className="photoAnnexe" onClick={()=>{this.onReplacePhotoPrincipale(ficheBestiaire.Aphoto_annexe5)}}/>
                        </Col>
                    </Row>

                </Container>

            </div>
        );
    }
}

export default FicheBestiaire;