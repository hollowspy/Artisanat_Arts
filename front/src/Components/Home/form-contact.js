import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './form-contact.css'


class FormContact extends Component {
    constructor(props){
        super(props);
        this.state = {
            flash : '',
            fields : {
                firstName : '', 
                lastName : '', 
                email : '', 
                object : '', 
                message : ''
            }, 
            errors : {},
            isValidForm : false,
            
        };
        
      }
 
   
      handleChange = (field, e) => {
          const field1 = field
          console.log('champs concerné', field1, e.target.value)
          let fields = this.state.fields;
              fields[field] = e.target.value
              let errors = this.state.errors
              if (fields[field] !== ""){
                  errors[field] = false
              }
              else {
                  errors[field] = true
                  this.setState({
                      isValidForm : true
                  })
              }
              this.setState({fields, errors})
     }

     onCheckMail = (field, e) => {
        console.log('je rentre dans testCheck', field, e.target.value)
        let fields = this.state.fields;
            fields[field] = e.target.value
            let errors = this.state.errors
            if (fields[field].match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                errors[field] = false
            }
            else {
                errors[field] = true
                this.setState({
                    isValidForm : true
                })
            }
            this.setState({fields, errors})
   }


   
    handleSubmit = e => {
       e.preventDefault();
       fetch("http://localhost:4000/mail", {
            method: 'POST',
            headers : new Headers({
                'Content-Type':  'application/json'
            }),
            body: JSON.stringify(this.state.fields)
        })
        .then(res  =>  res.json())
        .then (res => this.setState({
            flash : res.msg
        }))
        this.setState({
            fields : {
                firstName : '', 
                lastName : '',
                email : '', 
                object : '', 
                message : '', 
            },
            isValidForm : false,
        })
       }



    render() {
        console.log('fields', this.state.fields)
        const valid = 
            this.state.errors.lastName === false &&
            this.state.errors.firstName === false &&
            this.state.errors.email === false &&
            this.state.errors.object === false &&
            this.state.errors.message === false &&
            this.state.isValidForm === true
                       
        return (
            <div>
                <div className="formContact">
                    <h2>
                        Contact
                    </h2>
                    <div>Une question, une suggestion, une demande ?? N'hésitez pas à me contacter
                        en remplissant le formulaire. Je vous répondrais dès que possible. A bientôt !
                    </div>
                    <form>
                        <div>
                            <TextField
                                required
                                className="inputForm"
                                id="Nom"
                                label="Nom"
                                value={this.state.fields['lastName']}
                                onChange={(e) => this.handleChange('lastName', e)}
                                margin="normal"
                                error={this.state.errors['lastName'] === true}
                                helperText={this.state.errors['lastName'] === true ? 'Ce champs est requis' : ' '}
                                />
                        </div>
                        <div>
                            <TextField
                                required
                                className="inputForm"
                                id="Prenom"
                                label="Prenom"
                                value={this.state.fields['firstName']}
                                onChange={(e) => this.handleChange('firstName', e)}
                                margin="normal"
                                error={this.state.errors['firstName'] === true}
                                helperText={this.state.errors['firstName'] === true ? 'Ce champs est requis' : ' '}
                                />
                        </div>
                        <div>
                            <TextField
                              required
                                className="inputForm"
                                id="Email"
                                label="Email"
                                value={this.state.fields['email']}
                                onChange={(e) => this.onCheckMail('email', e)}
                                margin="normal"
                                error={this.state.errors['email'] === true}
                                helperText={this.state.errors['email'] === true ? 'Format de mail invalide' : ' '}
                        />
                        </div>
                        <div>
                            <TextField
                                required
                                className="inputForm"
                                id="Objet du mail"
                                label="Objet du mail"
                                value={this.state.fields['object']}
                                onChange={(e) => this.handleChange('object', e)}
                                margin="normal"
                                error={this.state.errors['object'] === true}
                                helperText={this.state.errors['object'] === true ? 'Ce champs est requis' : ' '}
                                />
                        </div>
                        <div>
                            <TextField
                                required
                                multiline={true}
                                rows={5}
                                className="inputForm"
                                id="Message"
                                label="Message"
                                value={this.state.fields['message']}
                                onChange={(e) => this.handleChange('message', e)}
                                margin="normal"
                                error={this.state.errors['message'] === true}
                                helperText={this.state.errors['message'] === true ? 'Ce champs est requis' : ' '}
                                />
                        </div>
                        <Button disabled={!valid} type="submit" onClick={this.handleSubmit}>
                            Envoyer le message
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormContact;