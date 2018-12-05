import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {getFormAdmin} from '../Actions/PostFormAdmin';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './FormAdmin.css'


const MapDispatchToProps = dispatch => {
    return bindActionCreators({getFormAdmin}, dispatch)
}

const MapStateToProps = state => {
    return {Auth : state.Auth}
}

class FormAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isSuccess: false,
            response : {}
        };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }

    
    componentDidUpdate(prevProps){
        console.log(prevProps, this.props)
        if (this.props.Auth !== prevProps.Auth) {
            let response = this.props.Auth.response
            let isSuccess = this.props.Auth.isSuccess
            this.setState({
                response,
                isSuccess
            }, this.onNaviguateAdmin)
        }
    }

    // there 's no change to the state of my component
       onNaviguateAdmin = () => {
         if (this.state.isSuccess){
            console.log('je navigue')
            setTimeout(() => {
                this.props.history.push('/admin')
            },2000)
          
        }
        else { 
            console.log('bah non')
        }
    }

    handleChange(e){
       this.setState({
           [e.target.name] : e.target.value
       })
    }

    handleSubmit(e){
        e.preventDefault(); 
        const body = {
            email : this.state.email,
            password : this.state.password
        }
       this.props.getFormAdmin(body)
      
     }

    render() {
    console.log('state render', this.state) // The state in the render is OK
    // const { Auth } = this.props
     let divResult = <div></div>
       if (this.state.response.flash ==='ok') {
        divResult = <div>Connexion réussie</div>
       }
       else if (this.state.response.flash ==='Not a yet a Success') {
           divResult = <div>Identifiants ou mot de passe invalides</div>
       }
          
        return (
            <div className="ContainerFormAdmin">
                <Container fluid>
                    <h3>Administration du site</h3>
                    <Row>
                        <Col xs={12}>
                        <form onSubmit={this.handleSubmit}>
                        <h5>Connexion à l'Administration</h5>
                            <div>
                            <TextField 
                            
                            name="email"
                            id="email"
                            label="email"
                            margin="normal"
                            onChange={this.handleChange}
                            />
                            </div>
                           <div>
                           <TextField 
                           
                           name ="password"
                           id="password"
                           label="password"
                           margin="normal"
                           onChange={this.handleChange}
                           />
                           </div> 
                           <Button
                           type="submit"
                           >Connexion</Button>
                        
                        </form>
                            
                        </Col>
                    </Row>
                </Container>
                <div>{divResult}</div>
             
        </div>

        );
    }
}


export default connect(MapStateToProps, MapDispatchToProps)(FormAdmin);