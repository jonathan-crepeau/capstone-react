import React from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';

import './AddPost.css';

class AddPost extends React.Component {
  state = {
    title: '',
    userDescription: '',
    plantType: '',
    waterNeeds: '',
    lightNeeds: '',
    size: '',
    cost: ''
  }

  inputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  formSubmit = event => {
  };

  render () {
    return (
      <Modal trigger={<Button id="addPost">Add Post</Button>} basic size="small">
        <Modal.Content>
          <Form inverted onSubmit={this.onSubmit}>
            <h2>Create A Post To Advertise Your Available Plant/s!</h2>
            <Form.Field>
              <label>Post Title:</label>
              <input id="title" name="title" type="text" placeholder="Post Title" onChange={this.inputChange} value={this.state.title} />
            </Form.Field>
            <Form.Field>
              <label>Post Body:</label>
              <input id="userDescription" name="userDescription" type="text" placeholder="Post Body" onChange={this.inputChange} value={this.state.userDescription} />
            </Form.Field>
            <Form.Field>
              <label>Type of Plant:</label>
              <input id="plantType" name="plantType" type="text" placeholder="Type of Plant" onChange={this.inputChange} value={this.state.plantType} />
            </Form.Field>
            <Form.Field>
              <label>Watering Needs:</label>
              <input id="waterNeeds" name="waterNeeds" type="text" placeholder="Watering Needs" onChange={this.inputChange} value={this.state.waterNeeds} />
            </Form.Field>
            <Form.Field>
              <label>Light Needs:</label>
              <input id="lightNeeds" name="lightNeeds" type="text" placeholder="Light Needs" onChange={this.inputChange} value={this.state.lightNeeds} />
            </Form.Field>
            <Form.Field>
              <label>Size of Plant:</label>
              <input id="size" name="size" type="text" placeholder="Size of Plant" onChange={this.inputChange} value={this.state.size} />
            </Form.Field>
            <Form.Field>
              <label>Cost of Plant (Required):</label>
              <small>If interested buyer cannot swap for plant, please enter the cost they can pay for the item.</small><br />
              <small className="attention">ATTENTION: Plant cost must be between $1-$30 USD!</small>
              <input id="cost" name="cost" type="number" placeholder="Cost of Plant" onChange={this.inputChange} value={this.state.cost} />
            </Form.Field>
            <Button className="submit-button" type='submit' color='green' circular>Submit</Button><br />
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default AddPost;