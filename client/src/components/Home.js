import React, { Component } from 'react';
import { Header, List, Segment, Card, Image, Button } from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';


class Home extends Component {
  state = { posts: []}

  componentDidMount() {
    axios.get(`/api/users/${this.props.user.id}/posts`)
    .then(res => {
      this.setState({ posts: res.data})
    }).catch( err => {
      console.log(err);
    })
  }

  showPost = () => {
    return this.state.posts.map( post =>
      <Card.Description>
        {post.content}
      </Card.Description>
    )
  }

  render() {
    const { posts } = this.state;

    return (
      <Segment>
        <Header as="h1">Tweeter Feed</Header>
        <Card.Group>
          <Card>
            <Card.Content>
              <Image floated='right' size='mini' src='https://react.semantic-ui.com/assets/images/avatar/large/molly.png' />
              <Card.Header>
                Name - {  }
              </Card.Header>
              <Card.Meta>
                Date - {  }
              </Card.Meta>
                {this.showPost()}
            </Card.Content>
          </Card>
        </Card.Group>
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user}
}

export default withRouter(connect(mapStateToProps)(Home));
