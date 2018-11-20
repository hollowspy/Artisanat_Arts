import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchDatas} from '../Actions/FetchData';
import _ from 'lodash';
import {Container, Row, Col} from 'react-bootstrap';
import './Vegetal.css'

const MapStateToProps = state => {
    return {Vegetal: state.Vegetal}
}

class Vegetal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this
            .props
            .dispatch(fetchDatas('vegetal'))
    }

    render() {
        const {Vegetal} = this.props
        console.log('mon vegetal from Redux', Vegetal.datas)
        return (
            <div className="ContainerVegetal">
                <Container>
                    <h4>
                        Végétal Redux
                    </h4>
                    <Row>
                        {!_.isEmpty(Vegetal) && Vegetal.datas.map(oeuvre => 
                            <Col xs={6} className="cardOeuvreVegetal">
                                <figure className="photoPrincipaleVegetal">
                                    <img src={oeuvre.Aphoto_principale} alt="principale"/>
                                    <figcaption>
                                        <h3>{oeuvre.name}</h3>
                                    </figcaption>
                                </figure>
                        </Col>)}
                    </Row>
                </Container>

            </div>

        );
    }
}
export default connect(MapStateToProps)(Vegetal);