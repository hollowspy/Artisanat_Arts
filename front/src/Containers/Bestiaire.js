import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchDatas} from '../Actions/FetchData';
import _ from 'lodash';
import {Container, Row, Col} from 'react-bootstrap';
import './Bestiaire.css'

const MapStateToProps = state => {
    return {Bestiaire: state.Bestiaire}
}

class Bestiaire extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this
            .props
            .dispatch(fetchDatas())
    }

    render() {
        const {Bestiaire} = this.props
        console.log('mon bestiaire from Redux', Bestiaire.datas)
        return (
            <div>
                <Container className="containerData">
                    <h4>Le Bestiaire</h4>
                    <Row>
                        {!_.isEmpty(Bestiaire) && 
                            Bestiaire.datas.map(oeuvre => 
                            <Col sm={6} className="containerCard">
                                <figure class="snip1165">
                                    <img src={oeuvre.Aphoto_principale} alt="sample62" className="photoPrincipale"/>
                                <figcaption>
                                    <button className="btn btn-default">Plus de détails</button>
                                </figcaption>
                                </figure>

                            </Col>
                        )}
                    </Row>
                </Container>
            </div>

        )
    }
}

export default connect(MapStateToProps)(Bestiaire);