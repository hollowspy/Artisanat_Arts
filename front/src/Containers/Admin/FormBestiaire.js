import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import './FormModal.css';
import { bindActionCreators } from 'redux';
import {putFormData} from '../../Actions/PutFormData';
import {postFormData} from '../../Actions/PostFormData';
import {UploadPhotos} from '../../Actions/UploadPhotos'; 
import {fetchDatas} from '../../Actions/FetchData';

import { connect } from 'react-redux';

const MapDispatchToProps = dispatch => {
    return bindActionCreators({putFormData, postFormData, UploadPhotos, fetchDatas}, dispatch)
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
                reproduction: ''
            }, 
            photoPrincipale : '', 
            PhotoAnnexe2 : '', 
            PhotoAnnexe3 : '',
            PhotoAnnexe4 : '', 
            PhotoAnnexe5 : '',
            PhotoAnnexe6 : ''
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
                    file : '',
                    fileName : ''
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
       .then(res => { 
           console.log('res aussi' , res)
           if (res.msg === "Vous venez d'ajouter une nouvelle oeuvre dans bestiaire"){
            this.onUploadPhotos()
           } else {
               console.log('pas bon !!! ')
           }
       })
     

    }

    handleChangePhotoPrincipale(e){
        const PhotoPrincipale = e.target.files[0]
        this.setState({
            PhotoPrincipale
        })
    }


    handleChangePhotosAnnexes(e){
        console.log('test file', e.target.files); 
        const PhotoAnnexe2 = e.target.files[0];
        const PhotoAnnexe3 = e.target.files[1]
        const PhotoAnnexe4 = e.target.files[2]
        const PhotoAnnexe5 = e.target.files[3]
        const PhotoAnnexe6 = e.target.files[4]
        this.setState({
            PhotoAnnexe2, 
            PhotoAnnexe3,
            PhotoAnnexe4,
            PhotoAnnexe5, 
            PhotoAnnexe6,
        })
        // this.props.close()
    }


    onUploadPhotos(){
        console.log('je rentrez dans upload Photos')
        const formData = new FormData(); 
        formData.append('file', this.state.PhotoPrincipale, this.state.PhotoPrincipale.name)
        formData.append('file', this.state.PhotoAnnexe2, this.state.PhotoAnnexe2.name)
        formData.append('file', this.state.PhotoAnnexe3, this.state.PhotoAnnexe3.name)
        formData.append('file', this.state.PhotoAnnexe4, this.state.PhotoAnnexe4.name)
        formData.append('file', this.state.PhotoAnnexe5, this.state.PhotoAnnexe5.name)
        formData.append('file', this.state.PhotoAnnexe6, this.state.PhotoAnnexe6.name)
        console.log('formdata',formData)
        this.props.UploadPhotos('upload_bestiaire', formData)
        .then(res => {
            if (res.message === 'source photo MAJ'){
                 this.props.close()
            }
        })
    }

    render() {
        const close = this.props.close;
        const oeuvre = this.props.oeuvre.oeuvre;
        const isExist = this.props.isExist;
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
                            <input type="file" name="file"  onChange={(e)=> {this.handleChangePhotoPrincipale(e)}} accept="image/x-png,image/jpeg"/>
                            <input type="file" multiple onChange={(e)=> {this.handleChangePhotosAnnexes(e)}} accept="image/x-png,image/jpeg"/>
                            
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