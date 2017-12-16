import React, { Component } from 'react';
import { Header, List, Segment } from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';


class Home extends Component {
  state = { posts: []}

  componentDidMount() {
    axios.get(`/api/users/:user_id/posts`)
    .then(res => {
      console.log(res.data)
    })
  }
  render() {
    const { posts } = this.state;
    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>
          Tweeter Feed
        </Header>
        <List>
          {posts}
        </List>
      </Segment>
    );
  }
}

export default connect()(Home);
