import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '@material-ui/core/Modal';
import {connect} from 'react-redux';
import {fetchDatas} from '../../Actions/FetchData';
import './Admin.css'

const MapStateToProps = state => {
    return {Vegetal: state.Vegetal}
}

class AdminBestiaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
        open : false
        };
    }

    componentDidMount() {
        this
            .props
            .dispatch(fetchDatas('vegetal'))
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        console.log('je rentre dans handlecose')
        this.setState({open: false});
    };
    render() {
        const {Vegetal} = this.props
        console.log('mon bestiaire from Redux', Vegetal.datas)
        return (
            <div>
                <h4>Administration de la table Bestiaire</h4>
                <div>
                    {Vegetal.datas.map((oeuvre, index) => 
                        <div key={index} 
                        className="list-group-item"
                        style={{ display : 'flex', 
                                justifyContent : 'space-between', 
                                textAlign : 'center'
                                 }}>
                        <div  className="detailOeuvre">{oeuvre.name}</div>
                        <FontAwesomeIcon onClick={this.handleOpen} className="btn-modifier" icon="edit" size="2x"/>
                        <FontAwesomeIcon className="btn-suppression" icon="window-close" size="2x"/>
                        
                        </div>
                    
                    )}
                </div>
            </div>

        );
    }
}

export default connect(MapStateToProps)(AdminBestiaire);