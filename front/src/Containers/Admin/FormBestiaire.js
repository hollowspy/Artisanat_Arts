import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import './FormModal.css';
import { bindActionCreators } from 'redux';
import {putFormData} from '../../Actions/PutFormData';
import {postFormData} from '../../Actions/PostFormData';
import { connect } from 'react-redux';

const MapDispatchToProps = dispatch => {
    return bindActionCreators({putFormData, postFormData}, dispatch)
}

class FormBestiaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                id : '',
                name: '',
                materials: '',
                width: '',
                height: '',
                reproduction: '',
            }
        };
    }

    componentDidMount(){
        if (this.props.isExist === true){
            console.log('g bien une oeuvre', this.props.oeuvre)
            this.setState({
                fields: {
                    id : this.props.oeuvre.oeuvre.id,
                    name: this.props.oeuvre.oeuvre.name,
                    materials: this.props.oeuvre.oeuvre.materials,
                    width: this.props.oeuvre.oeuvre.width,
                    height: this.props.oeuvre.oeuvre.height,
                    reproduction: this.props.oeuvre.oeuvre.reproduction
                }
            })
        } else {
            this.setState({
                fields: {
                    id : '',
                    name: '',
                    materials: '',
                    width: '',
                    height: '',
                    reproduction: '',
                }
            })
        }
    }

    handleChange = (field, e) => {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields})
    }

    handleEditSubmit = () =>{
        const body = this.state.fields
        console.log('je rentre dans handeSubmit', this.state.fields)
        console.log('body', body)
        this.props.putFormData(body, 'bestiaire', this.state.fields.id)
        this.props.close()

    }

    handleAddSubmit = () =>{
        const body = this.state.fields
        console.log('je rentre dans handeSubmit', this.state.fields)
        console.log('body', body)
        this.props.postFormData(body, 'bestiaire')
        this.props.close()

    }

    render() {
        const close = this.props.close;
        const oeuvre = this.props.oeuvre.oeuvre;
        const isExist = this.props.isExist;
        
        console.log('fields FormBestiaire', this.state.fields)
        return (
            <div>
                {isExist === true
                    ?  
                    <div>
                    <Modal.Header closeButton>
                        <Modal.Title>Modification d'une oeuvre</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Nom de l'oeuvre</label>
                                <input
                                id="name"
                                type="text"
                                defaultValue={oeuvre.name}
                                className="form-control"
                                name="name"
                                onChange={(e) => this.handleChange('name', e)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="materials">Materials</label>
                                <input
                                id="materials"
                                type="text"
                                defaultValue={oeuvre.materials}
                                className="form-control"
                                name="materials"
                                onChange={(e) => this.handleChange('materials', e)}/> 
                        </div>
                        <div className="form-group">
                            <label htmlFor="width">Largeur</label>
                                <input
                                id="width"
                                type="number"
                                defaultValue={oeuvre.width}
                                className="form-control"
                                name="width"
                                onChange={(e) => this.handleChange('width', e)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="height">Hauteur</label>
                                 <input
                                id="height"
                                type="number"
                                defaultValue={oeuvre.height}
                                className="form-control"
                                name="height"
                                onChange={(e) => this.handleChange('height', e)}/>
                            </div>
                        <div className="form-group">
                            <label htmlFor="reproduction">Description</label>
                                <input
                                id="reproduction"
                                type="text-area"
                                defaultValue={oeuvre.reproduction}
                                className="form-control"
                                name="reproduction"
                                onChange={(e) => this.handleChange('reproduction', e)}/>
                        </div>
                    </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleEditSubmit}>
                            Modifier
                        </Button>
                        <Button variant="secondary" onClick={close}>
                            Annuler
                        </Button>
                    </Modal.Footer>


                   </div>
                    : 
                    <div>  
                        <Modal.Header closeButton>
                            <Modal.Title>Ajout d'une oeuvre</Modal.Title>
                        </Modal.Header>
                            <Modal.Body>
                            <form>
                            <div className="form-group">
                                <label htmlFor="name">Nom de l'oeuvre</label>
                                    <input
                                    id="name"
                                    type="text"
                                    defaultValue=''
                                    className="form-control"
                                    name="name"
                                    onChange={(e) => this.handleChange('name', e)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="materials">Materials</label>
                                    <input
                                    id="materials"
                                    type="text"
                                    defaultValue=''
                                    className="form-control"
                                    name="materials"
                                    onChange={(e) => this.handleChange('materials', e)}/> 
                            </div>
                            <div className="form-group">
                            <label htmlFor="width">Largeur</label>
                                 <input
                                id="width"
                                type="number"
                                defaultValue=''
                                className="form-control"
                                name="width"
                                onChange={(e) => this.handleChange('width', e)}/>
                            </div>
                          
                            <div className="form-group">
                                <label htmlFor="height">Hauteur</label>
                                     <input
                                    id="height"
                                    type="number"
                                    defaultValue=''
                                    className="form-control"
                                    name="height"
                                    onChange={(e) => this.handleChange('height', e)}/>
                                </div>
                            <div className="form-group">
                                <label htmlFor="reproduction">Description</label>
                                    <input
                                    id="reproduction"
                                    type="text-area"
                                    defaultValue=''
                                    className="form-control"
                                    name="reproduction"
                                    onChange={(e) => this.handleChange('reproduction', e)}/>
                            </div>
                        </form>
                            </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleAddSubmit}>
                                Ajouter
                            </Button>
                            <Button variant="secondary" onClick={close}>
                                Annuler
                            </Button>
                        </Modal.Footer>
                    </div>
                    }
            </div>
        );
    }
}

export default connect(null, MapDispatchToProps)(FormBestiaire);