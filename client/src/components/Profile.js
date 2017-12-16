import React, { Component } from 'react';
import { Header, Segment, Button } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    return (
      <Segment>
        <Header as='h1' textAlign='center'>Profile Component</Header>
        <Segment>
          <Header as="h2">Your Profile Image</Header>
          <Header as="h2">Your Name</Header>
          <Header as="h2">Display Name</Header>
        </Segment>
        <Link to="./profile/edit">
          <Link to={`/EditProfile/${this.props.user.id}`}>Edit Profile</Link>
        </Link>
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(Profile));
