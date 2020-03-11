import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, Form } from 'semantic-ui-react'

import './Login.css';

class LoginModal extends React.Component {
  state = {
    password: '',
    username: ''
  }

  inputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  formSubmit = event => {
    event.prevent
  }

  render() {
    return (
        <Modal trigger={<Link id="login">Login</Link>} basic size='small'>
          <Modal.Content>
            <Form inverted onSubmit={this.formSubmit}>
              <Form.Field>
                <label>Username</label>
                <input id="username" name="username" type="text" onChange={this.inputChange} value={this.state.username} placeholder='Username' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input id="password" name="password" type="password" onChange={this.inputChange} value={this.state.password} placeholder='Password' />
              </Form.Field>
              <Button className="submit-button" type='submit' color='green' circular='true'>Submit</Button><br/>
              <a className="login-link" href="#">Already have an account? Click here to login</a>
            </Form>
          </Modal.Content>
        </Modal>
    );
  }
}

export default LoginModal;