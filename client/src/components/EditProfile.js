import React, { Component } from 'react';
import { Header, Form, Container, Image } from 'semantic-ui-react';
import axios from 'axios';
import { connect } from'react-redux';

class EditProfile extends Component {
  state = { email: this.props.user.email }

  render() {
    return (

      <div>
      <Header as='h1' textAlign='center'>
      {' '}Edit Your Profile
        </Header>


      <Container>
      <Form>
      <Form.Group widths='equal'>
        <Form.Input label='Email address' placeholder={this.state.email} />
      </Form.Group>
        <Form.TextArea label='Bio' placeholder='Tell us more about you...' />
        <Form.Button>Save Edit Profile</Form.Button>
      </Form>
      </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(EditProfile);
