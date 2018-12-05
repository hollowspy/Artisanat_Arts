import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {connect} from 'react-redux';
import {Modal, Button} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import {fetchDatas} from '../../Actions/FetchData';
import {deleteData} from '../../Actions/DeleteData';
import FormBestiaire from './FormBestiaire';

import './Admin.css'

const MapDispatchToProps = dispatch => {
    return bindActionCreators({deleteData, fetchDatas}, dispatch)
}

const MapStateToProps = state => {
    return {Bestiaire: state.Bestiaire}
}


class AdminBestiaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isExist : true,  
          show : false,
          oeuvre: {
            id : '',
            name: '',
            materials: '',
            width: '',
            height: '',
            reproduction: '',
        }
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        this.props.fetchDatas('bestiaire')
         }

    handleClose() {
        this.setState({ 
            show: false,
            isAlreadyExist : false, });
    }
    
    handleShow = (oeuvre, exist) => {
         console.log('exist dans handleshow', exist)
         if (exist === 'isExist'){
            this.setState({
                isAlreadyExist : true
            })
         }
            this.setState({ 
            show: true, 
            oeuvre
            });
    }

    onDeleteOeuvre(category, id, name){
         if (window.confirm(`Etes vous sûr de vouloir supprimer l'oeuvre suivante :  ${name}`)){
          this.props.deleteData(category, id)  
        }
    }


    render() {
        const {Bestiaire} = this.props
               
        return (
            <div>
                <h4>Administration de la table Bestiaire</h4>
                <div>
                    {Bestiaire.datas.map((oeuvre, index) => 
                        <div key={index} 
                        className="list-group-item"
                        style={{ display : 'flex', 
                                justifyContent : 'space-between', 
                                textAlign : 'center'
                                 }}>
                        <div  className="detailOeuvre">{oeuvre.name}</div>
                        <FontAwesomeIcon onClick={() =>{this.handleShow({oeuvre}, 'isExist')}} className="btn-modifier" icon="edit" size="2x"/>
                        <FontAwesomeIcon onClick={() =>{this.onDeleteOeuvre('bestiaire', oeuvre.id, oeuvre.name)}} className="btn-suppression" icon="window-close" size="2x"/>
                        
                        </div>
                    
                    )}
                    <div>
                    <Button variant="primary" onClick={()=> {this.handleShow(this.state.oeuvre, 'isNotExist')}}>Ajoutez une oeuvre</Button>
                   
                    </div>
                </div>
             <Modal show={this.state.show} onHide={this.handleClose}>
                <FormBestiaire
                close={this.handleClose}
                oeuvre={this.state.oeuvre}
                isExist={this.state.isAlreadyExist}
                />
            </Modal>
      
            
               
            </div>

        );
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(AdminBestiaire);