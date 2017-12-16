import React, { Component } from 'react';
import { Header, Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  render() {
    return (
      <Segment>
        <Header as='h1' textAlign='center'>Profile Component</Header>
        <Link to="./EditProfile">Edit Profile</Link>
      </Segment>
    );
  }
}

export default Profile;
