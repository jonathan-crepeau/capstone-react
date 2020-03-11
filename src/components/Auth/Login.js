import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal, Form } from 'semantic-ui-react'


class LoginModal extends React.Component {
  state = {
    email: '',
    password: ''
  }

  render() {
    return (
        <Modal trigger={<Link>Login</Link>} basic size='small'>
          <Modal.Content>
            <Form inverted>
              <Form.Field>
                <label>Username</label>
                <input placeholder='Username' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input placeholder='Password' />
              </Form.Field>
              <Button type='submit' color='green' circular='true' >Submit</Button>
            </Form>
          </Modal.Content>
        </Modal>
    );
  }
}

export default LoginModal;