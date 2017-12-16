import React, { Component } from 'react';
import { Header, Segment, Button } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    return (
      <Segment>
        <Header as='h1' textAlign='center'>Profile Component</Header>
        <Link to={`/EditProfile/${this.props.user.id}`}>Edit Profile</Link>
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(Profile));
