import React, {Component} from 'react';
import {Container, Row, Col, ProgressBar} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './NewUser.css'

class FormNewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                firstName: '',
                lastName: '',
                password: '',
                passwordCheck: '',
                email: ''
            },
            errors: {},
            isValidForm: false,
            colorProgressBar: '',
            unitProgressBar: 0,
            flash: ''
        };
    }

    handleChange = (field, e) => {
        const field1 = field
        console.log('champs concerné', field1, e.target.value)
        let fields = this.state.fields;
        fields[field] = e.target.value
        let errors = this.state.errors
        if (fields[field] !== "") {
            errors[field] = false
        } else {
            errors[field] = true
            this.setState({isValidForm: true})
        }
        this.setState({fields, errors})
    }

    onCheckMail = (field, e) => {
        console.log('je rentre dans CheckPassword', field, e.target.value)
        let fields = this.state.fields;
        fields[field] = e.target.value
        let errors = this.state.errors
        if (fields[field].match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            errors[field] = false
        } else {
            errors[field] = true
            this.setState({isValidForm: true})
        }
        this.setState({fields, errors})
    }

    onCheckPassword = (field, e) => {
        console.log('je rentre dans testCheck', field, e.target.value)
        let fields = this.state.fields;
        fields[field] = e.target.value
        let errors = this.state.errors
        if (fields[field].length <= 5) {
            errors[field] = true;
            this.setState({unitProgressBar: 33, colorProgressBar: 'success'})
        }
        if (fields[field].match(/\w{6,}/g)) {
            errors[field] = true;
            this.setState({unitProgressBar: 66, colorProgressBar: 'warning'})
        }
        if (fields[field].match('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$')) {
            errors[field] = false;
            this.setState({unitProgressBar: 100, colorProgressBar: 'danger', isValidForm: true})
        }
        this.setState({fields, errors})
    }

    handleSubmit = e => {
        e.preventDefault();
        const password = this.state.fields.password;
        const passwordCheck = this.state.fields.passwordCheck
        if (password !== passwordCheck) {
            console.log('password differrents')
            return alert('Vos mots de passes sont différents, veuillez ressaisir')
        } else {
            const body = this.state.fields
            console.log('body', body)
            fetch('http://localhost:4000/admin/newuser', {
                method: 'POST',
                headers: new Headers({'Content-Type': 'application/json'}),
                    body: JSON.stringify(body)
                })
                .then(res => res.json())
                .then(res => {
                    this.setState({flash: res})
                })
            setTimeout(() => {
                this
                    .props
                    .history
                    .push('/auth')
            }, 2000)

        }
    }

    render() {
        console.log('this state', this.state)
        const valid = this.state.errors.lastName === false && this.state.errors.firstName === false && this.state.errors.email === false && this.state.errors.password === false && this.state.errors.passwordCheck === false && this.state.isValidForm === true

        return (
            <div className="containerNewUser">
                <Container>
                    <Row>
                        <h3>
                            Création d'un nouvel administrateur</h3>
                    </Row>
                    <Col xs={12}>
                        <form className="formAuth">
                            <div>
                                <TextField
                                    required
                                    className="inputForm"
                                    id="firstName"
                                    label="Prénom"
                                    value={this.state.fields['firstName']}
                                    onChange={(e) => this.handleChange('firstName', e)}
                                    margin="normal"
                                    error={this.state.errors['firstName'] === true}
                                    helperText={this.state.errors['firstName'] === true
                                    ? 'Ce champs est requis'
                                    : ' '}/>
                            </div>
                            <div>
                                <TextField
                                    required
                                    className="inputForm"
                                    id="lastName"
                                    label="Nom"
                                    value={this.state.fields['lastName']}
                                    onChange={(e) => this.handleChange('lastName', e)}
                                    margin="normal"
                                    error={this.state.errors['lastName'] === true}
                                    helperText={this.state.errors['lastName'] === true
                                    ? 'Ce champs est requis'
                                    : ' '}/>
                            </div>
                            <div>
                                <TextField
                                    required
                                    className="inputForm"
                                    type="password"
                                    id="password"
                                    label="Mot de passe"
                                    value={this.state.fields['password']}
                                    onChange={(e) => this.onCheckPassword('password', e)}
                                    margin="normal"
                                    error={this.state.errors['password'] === true}
                                    helperText={this.state.errors['password'] === true
                                    ? 'Votre mot de passe doit contenir une majuscule, un chiffre et faire 8 caractères' +
                                        ' minimum'
                                    : ' '}/>
                            </div>
                            {this.state.unitProgressBar !== 0
                                ? <div>
                                        <ProgressBar
                                            striped
                                            variant={this.state.colorProgressBar}
                                            now={this.state.unitProgressBar}/>
                                    </div>
                                : ''
}
                            <div>
                                <TextField
                                    required
                                    className="inputForm"
                                    type="password"
                                    id="password"
                                    label="Retappez votre mot de passe"
                                    value={this.state.fields['passwordCheck']}
                                    onChange={(e) => this.handleChange('passwordCheck', e)}
                                    margin="normal"
                                    error={this.state.errors['passwordCheck'] === true}
                                    helperText={this.state.errors['passwordCheck'] === true
                                    ? 'Ce champs est requis'
                                    : ' '}/>
                            </div>
                            <div>
                                <TextField
                                    required
                                    className="inputForm"
                                    id="email"
                                    label="Email"
                                    value={this.state.fields['email']}
                                    onChange={(e) => this.onCheckMail('email', e)}
                                    margin="normal"
                                    error={this.state.errors['email'] === true}
                                    helperText={this.state.errors['email'] === true
                                    ? 'Format de mail invalide'
                                    : ' '}/>
                            </div>
                            <Button disabled={!valid} type="submit" onClick={this.handleSubmit}>
                                Envoyer le message
                            </Button>
                        </form>
                        {this.state.flash !== ''
                            ? <div>{this.state.flash.message}</div>
                            : ''
}
                    </Col>
                </Container>
            </div>

        );
    }
}

export default FormNewUser;