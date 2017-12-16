import React, { Component } from 'react';
import { Header, List, Segment } from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';


class Home extends Component {
  state = { posts: []}

  componentDidMount() {
    axios.get(`/api/users/${this.props.user.id}/posts`)
    .then(res => {
      this.setState({ posts: res.data})
    })
  }

  showPost = () => {
    return this.state.posts.map( post =>
      <List.Item>
        {post.content}
      </List.Item>
    )

  }

  render() {
    const { posts } = this.state;
    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>
          Tweeter Feed
        </Header>
        <List>
          {this.showPost()}
        </List>
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user}
}

export default withRouter(connect(mapStateToProps)(Home));
