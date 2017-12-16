import React, { Component } from 'react';
import { Header, Segment, Button, Card, Image, Icon } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Profile extends Component {
  state = { 
    name: this.props.user.name,
    email: this.props.user.email,
    displayName: this.props.user.nickname,
    image: this.props.user.image,
    id: this.props.user.id
  }
  render() {
    return (
      <Segment>
        <Card>
          <Image src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png' />
          <Card.Content>
            <Card.Header>
              Name - {this.state.name}
            </Card.Header>
            <Card.Description>
              Display Name - {this.state.displayName}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              <Link to={`/EditProfile/${this.id}`}>Edit Profile</Link>
            </a>
          </Card.Content>
        </Card>
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(Profile));
