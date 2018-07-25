import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  Popover,
  Tooltip,
  Modal,
  Button,
} from 'react-bootstrap';
import '../style/Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      flash: '',
      user: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    fetch('/admin', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(this.state),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          flash: res.flash,
          user: res.user,
        }),
        (res.flash === 'ok')?this.props.history.push(`/admin/${res.user}`): this.props.history.push('/')
          err => this.setState({ fash: err.flash });
      })
   }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} className="containForm">
              <h2 className="formLogin">Administration</h2>
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Adresse mail</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={this.handleUserInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Mot de passel</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={this.handleUserInput}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Se connecter
                </button>
                <div>{this.state.flash}</div>
              </form>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Login;
