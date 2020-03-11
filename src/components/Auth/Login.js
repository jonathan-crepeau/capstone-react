import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Modal, Form } from 'semantic-ui-react'

import './Login.css';

class LoginModal extends React.Component {
  state = {
    username: '',
    password: ''
  }

  inputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  formSubmit = event => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, this.state, { withCredentials: true })
    .then(res => {
      console.log(res);
      // this.props.setCurrentUser(res.data.data);
    })
    .catch(err => console.log(err));
  };

  render() {
    return (
        <Modal trigger={<Link id="login">Login</Link>} basic size='small'>
          <Modal.Content>
            <Form inverted onSubmit={this.formSubmit}>
              <h2>Login</h2>
              <Form.Field>
                <label>Username</label>
                <input id="username" name="username" type="text" onChange={this.inputChange} value={this.state.username} placeholder='Username' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input id="password" name="password" type="password" onChange={this.inputChange} value={this.state.password} placeholder='Password' />
              </Form.Field>
              <Button className="submit-button" type='submit' color='green' circular>Submit</Button><br/>
              <a className="register-link" href="/">Don't have an account? Click here to register!</a>
            </Form>
          </Modal.Content>
        </Modal>
    );
  }
}

export default LoginModal;