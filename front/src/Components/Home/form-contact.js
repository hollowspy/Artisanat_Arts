import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';

import './form-contact.css'


class FormContact extends Component {
    constructor(props){
        super(props);
        this.state = {
            flash : '',
            fields : {}, 
            error : {}
        };
        // this.onCheckMail = this.onCheckMail.bind(this)
    }
 
   

     handleChange = (field, e) => event => {
        console.log('je rentre dans hanldechange')
        let fields = this.state.fields;
        fields[field] = event.target.value
        let errors = this.state.error
        if (fields[field] !== ""){
            errors[field] = false
        }
        else {
            errors[field] = true
        }
        this.setState({fields, errors})

    };

    onCheckMail = e => event => {
        let errors = this.state.error
        let mail = event.target.value
        console.log('je rentre dans checkmail', mail)
        if (mail.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            errors['email'] = false;
        }
        else{
            errors['email'] = true;
        }
        this.setState({errors})
    }

   
    handleSubmit = e => {
       e.preventDefault();
       fetch("http://localhost:4000/mail", {
            method: 'POST',
            headers : new Headers({
                'Content-Type':  'application/json'
            }),
            body: JSON.stringify(this.state)
        })
        .then(res  =>  res.json())
        .then (res => this.setState({
            flash : res.msg
        }))
    }



    render() {
        console.log('state fields', this.state.fields)
        console.log('flash', this.state.flash)
        return (
            <div>
                <div className="formContact">
                    <h2>
                        Contact
                    </h2>
                    <div>Une question, une suggestion, une demande ?? N'hésitez pas à me contacter
                        en remplissant le formulaire. Je vous répondrais dès que possible. A bientôt !
                    </div>
                    <form noValidate autoComplete="off">
                        <div>
                            <TextField
                                required
                                className="inputForm"
                                id="Nom"
                                label="Nom"
                                value={this.state.fields['lastName']}
                                onChange={this.handleChange('lastName')}
                                margin="normal"
                                error={this.state.error['lastName'] === true}
                                helperText={this.state.error['lastName'] === true ? 'Ce champs est requis' : ' '}
                                />
                        </div>
                        <div>
                            <TextField
                                required
                                className="inputForm"
                                id="Prenom"
                                label="Prenom"
                                value={this.state.fields['firstName']}
                                onChange={this.handleChange('firstName')}
                                margin="normal"
                                error={this.state.error['firstName'] === true}
                                helperText={this.state.error['firstName'] === true ? 'Ce champs est requis' : ' '}
                                />
                        </div>
                        <div>
                            <TextField
                                className="inputForm"
                                required
                                id="Email"
                                label="Email"
                                value={this.state.fields['email']}
                                onChange={this.onCheckMail('firstName')}
                                margin="normal"
                                error={this.state.error['email'] === true}
                                helperText={this.state.error['email'] === true ? 'Ceci n\'est pas un mail valide' : ' '}
                                />
                        </div>
                        <div>
                            <TextField
                                required
                                className="inputForm"
                                id="Objet du mail"
                                label="Objet du mail"
                                value={this.state.fields['object']}
                                onChange={this.handleChange('object')}
                                margin="normal"
                                error={this.state.error['object'] === true}
                                helperText={this.state.error['object'] === true ? 'Ce champs est requis' : ' '}
                                />
                        </div>
                        <div>
                            <TextField
                                required
                                className="inputForm"
                                id="Message"
                                label="Message"
                                value={this.state.fields['message']}
                                onChange={this.handleChange('message')}
                                margin="normal"
                                error={this.state.error['message'] === true}
                                helperText={this.state.error['message'] === true ? 'Ce champs est requis' : ' '}
                                />
                        </div>
                        <Button type="submit" onClick={this.handleSubmit}>
                            Envoyer le message
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormContact;