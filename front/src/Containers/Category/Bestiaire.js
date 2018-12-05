import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchDatas} from '../../Actions/FetchData';
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
            .dispatch(fetchDatas('bestiaire'))
    }

    onNavigate(id){
        this.props.history.push(`./bestiaire/${id}`)
    }

    render() {
        const {Bestiaire} = this.props
        console.log('mon bestiaire from Redux', Bestiaire.datas)
        return (
            <div>
                <Container className="containerBestiaire">
                    <h4>Le Bestiaire</h4>
                    <Row>
                        {!_.isEmpty(Bestiaire) && 
                            Bestiaire.datas.map((oeuvre, index) => 
                            <Col sm={6} key={index} className="containerCard">
                                <figure className="snip1165">
                                    <img src={oeuvre.Aphoto_principale} alt="sample62" className="photoPrincipale"/>
                                <figcaption>
                                    <button className="btn btn-default" onClick={()=> {this.onNavigate(oeuvre.id)}}>Plus de détails</button>
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