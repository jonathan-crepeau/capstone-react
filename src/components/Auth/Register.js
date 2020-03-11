import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, Form } from 'semantic-ui-react';

import './Register.css';

class RegisterModal extends React.Component {
  state = {
    username: '',
    password: '',
    email: '',
    publicEmail: '',
    zipcode: ''
  };

  inputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  formSubmit = event => {

  };

  render() {
    return (
      <Modal trigger={<Link id="register">Register</Link>} basic size='small'>
        <Modal.Content>
          <Form inverted onSubmit={this.formSubmit}>
            <Form.Field>
              <label>Username</label>
              <input id="username" name="username" type="text" onChange={this.inputChange} value={this.state.username} placeholder="Username" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input id="password" name="password" type="password" placeholder="Password" onChange={this.inputChange} value={this.state.password} />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input id="email" name="email" type="email" placeholder="Email" onChange={this.inputChange} value={this.state.email} />
            </Form.Field>
            <Form.Field>
              <label>Public Email</label>
              <input id="publicEmail" name="publicEmail" type="email" placeholder="Public Email" onChange={this.inputChange} value={this.state.publicEmail} />
              <small>Your 'Public Email' is the email address shared with the other user at time of purchase. It can be the same email as you provided for the text field above ("Email")</small>
            </Form.Field>
            <Form.Field>
              <label>Zipcode</label>
              <input id="zipcode" name="zipcode" type="text" placeholder="Zipcode" onChange={this.inputChange} value={this.state.zipcode} />
            </Form.Field>
            <Button className="submit-button" type="submit" color="green" circular>Submit</Button><br/>
            <a className="login-link" href="#">Already have an account? Click here to login!</a>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default RegisterModal;