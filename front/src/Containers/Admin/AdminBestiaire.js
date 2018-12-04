import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {connect} from 'react-redux';
import {Modal, Button} from 'react-bootstrap';
import {fetchDatas} from '../../Actions/FetchData';
import FormBestiaire from './FormBestiaire';

import './Admin.css'



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
        this
            .props
            .dispatch(fetchDatas('bestiaire'))
         }

    // componentDidUpdate(prevProps){
    //     // console.log('prevprops', prevProps); 
    //     // console.log('this.props', this.props.Bestiaire)
    //     if (this.props.Bestiaire !== prevProps.Bestiaire){
    //         console.log('c different')
    //     }
    //     else {
    //         console.log('c pareil')
    //     }
    // }

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


    render() {
        const {Bestiaire} = this.props
        // console.log('state Admin', this.state)
        const oeuvre = this.state.oeuvre;
        // console.log('oeuvre Admin', oeuvre)
        
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
                        <FontAwesomeIcon className="btn-suppression" icon="window-close" size="2x"/>
                        
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

export default connect(MapStateToProps)(AdminBestiaire);