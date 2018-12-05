import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchDatas} from '../../Actions/FetchData';
import './AdminCarousel.css'

const MapStateToProps = state => {
    return {Carousel: state.Carousel}
}

const MapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchDatas
    }, dispatch)
}

class AdminCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            res : 'ici resultat', 
            file : '', 
            fileName : ''
        };
    }

    componentDidMount() {
        this.props.fetchDatas('carousel')
    }

    handleChange(e){
        console.log('Le fichier change', e.target.files[0].name)
        const file = e.target.files[0]
        const fileName = e.target.files[0].name
        this.setState({
            file, 
            fileName
        })
    }

    onUploadCarousel(id){
        // console.log('on submit')
        const file = this.state.file;
        const fileName = this.state.fileName
        // console.log(file, fileName)
        const formData = new FormData(); 
        formData.append('file', file, fileName )
        formData.append('id', id)
     
        fetch('http://localhost:4000/upload/upload_carousel', {
            method : 'POST', 
            body : formData
        })
        .then(res => res.json())
        .then((res) => {
           if (res.message === "source photo MAJ"){
            this.props.fetchDatas('carousel')
            }
            else {
                console.log('y\' a erreur' )
            }
        })
        
    }

    render() {
        const carousel = this.props.Carousel.datas
        return (
            <div>
                {carousel.map((photo, index) => 
                    <div key={index} className="list-group-item" style={{display : 'flex', justifyContent : 'space-around', alignItems : 'center'}}>
                    <div className="namePhotoCarousel"></div>
                    <div>
                        {photo.name}</div>
                    <div>
                        <img src={photo.Asource} alt="photo_carousel" className="photo_carousel"/>
                        <form>
                            <div>
                                <input type="file" name="file"  onChange={(e)=> {this.handleChange(e)}} accept="image/x-png,image/jpeg"/>
                            </div>
                        </form>
                        <button onClick={()=> {this.onUploadCarousel(photo.id)}}>Envoyer</button>
                    </div>

                </div>)}

            </div>
        );
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(AdminCarousel);