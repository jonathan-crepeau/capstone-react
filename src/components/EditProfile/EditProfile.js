import React from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';

import './EditProfile.css';

class EditProfile extends React.Component {
  state = {
    username: '',
    password: '',
    email: '',
    publicEmail: '',
    zipcode: '',
  }

  inputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  formSubmit = event => {
  };

  render() {
    return (
      <Modal trigger={<Button id="editProfile">Edit Profile Information</Button>} basic size="small">
        <Modal.Content>
          <Form inverted onSubmit={this.onSubmit}>
            <h2>Edit Profile Information</h2>
            <Form.Field>
              <label>Username:</label>
              <input id="username" name="username" type="text" placeholder="Username" onChange={this.inputChange} value={this.state.username} />
            </Form.Field>
            <Form.Field>
              <label>Password:</label>
              <input id="password" name="password" type="password" placeholder="Password" onChange={this.inputChange} value={this.state.password} />
            </Form.Field>
            <Form.Field>
              <label>Email:</label>
              <input id="email" name="email" type="email" placeholder="Email" onChange={this.inputChange} value={this.state.email} />
            </Form.Field>
            <Form.Field>
              <label>Public Email:</label>
              <input id="publicEmail" name="publicEmail" type="email" placeholder="Public Email" onChange={this.inputChange} value={this.state.publicEmail} />
            </Form.Field>
            <Form.Field>
              <label>Zipcode:</label>
              <input id="zipcode" name="zipcode" type="text" placeholder="Zipcode" onChange={this.inputChange} value={this.state.zipcode} />
            </Form.Field>
            <Button className="submit-button" type='submit' color='green' circular>Submit</Button><br />
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default EditProfile;