import React, { Component } from 'react';
import { Header, Form, Container, Image } from 'semantic-ui-react';
import { connect } from'react-redux';
import { getBio } from '../actions/bio';

class EditProfile extends Component {
  state = { email: this.props.user.email, description: '', bio: { description: '' }}

  componentWillMount() {
    const { user: { id }, dispatch } = this.props;
    dispatch(getBio(id));
  }
  
  componentDidMount() {
    this.setState({ ...this.props.bio });
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({ bio: nextProps.bio })
  }

  render() {
    if(Object.keys(this.props.bio).length < 1) {
      return <div>Loading</div>
    }
    return (

      <div>
      <Header as='h1' textAlign='center'>
      {' '}Edit Your Profile
        </Header>


      <Container>
      <Form>
        <Form.Group widths='equal'>
          <Form.Input label='Email address' value={this.state.email} />
        </Form.Group>
        <Form.TextArea label='Bio' value={this.state.bio.description} />
        <Form.Button>Save Edit Profile</Form.Button>
      </Form>
      </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    user: state.user,
    bio: state.bio 
  };
};

export default connect(mapStateToProps)(EditProfile);
