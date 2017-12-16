import React, { Component } from 'react';
import { Header, Form, Container, Image } from 'semantic-ui-react';

class EditProfile extends Component {
    state: { email, encrypted password, }

  render() {
    return (

      <div>
      <Header as='h1' textAlign='center'>
      {' '}Edit Your Profile
        </Header>


      <Container>
      <Form>
      <Form.Group widths='equal'>
        <Form.Input label='Email address' placeholder='Email address' />
        <Form.Input label='Password' placeholder='Password' />
      </Form.Group>
        <Form.TextArea label='Bio' placeholder='Tell us more about you...' />
        <Form.Button>Edit Profile</Form.Button>
      </Form>
      </Container>
      </div>
    );
  }
}

export default EditProfile;