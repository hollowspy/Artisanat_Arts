import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {connect} from 'react-redux';
import {Modal} from 'react-bootstrap';
import {fetchDatas} from '../../Actions/FetchData';
import FormBestiaire from './FormBestiaire'
import './Admin.css'

const MapStateToProps = state => {
    return {Bestiaire: state.Bestiaire}
}

class AdminBestiaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show : false,
          oeuvre : {}
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        this
            .props
            .dispatch(fetchDatas('bestiaire'))
    }

    handleClose() {
        this.setState({ show: false });
      }
    
    //   handleShow(oeuvre) {
    //       console.log('je rentre dans show')
        
    //     this.setState({ 
    //         show: true, 
    //         oeuvre
    //         });
    //   }
  
      handleShow = (oeuvre) => {
          console.log('je rentre dans hanldeShow avec', oeuvre)
            this.setState({ 
            show: true, 
            oeuvre
            });
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
                        <FontAwesomeIcon onClick={() =>{this.handleShow({oeuvre})}} className="btn-modifier" icon="edit" size="2x"/>
                        <FontAwesomeIcon className="btn-suppression" icon="window-close" size="2x"/>
                        
                        </div>
                    
                    )}
                </div>
             <Modal show={this.state.show} onHide={this.handleClose}>
                <FormBestiaire
                close={this.handleClose}
                oeuvre={this.state.oeuvre}
                />
            </Modal>
      
            
               
            </div>

        );
    }
}

export default connect(MapStateToProps)(AdminBestiaire);