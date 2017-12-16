import React, { Component } from 'react';
import { Header, List, Segment, Card, Image, Button } from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';


class Home extends Component {
  state = { posts: []}

  componentDidMount() {
    axios.get(`/api/users/:user_id/posts`)
      .then(res => {
        console.log(res.data)
      }).catch( err => {
        console.log(err)
    });
  }

  render() {
    const { posts } = this.state;

    return (
      <Segment>
        <Header as="h1">News Feed</Header>
        <Card.Group>
          <Card>
            <Card.Content>
              <Image floated='right' size='mini' src='https://react.semantic-ui.com/assets/images/avatar/large/molly.png' />
              <Card.Header>
                Name - {  }
              </Card.Header>
              <Card.Meta>
                Date - {}
              </Card.Meta>
              <Card.Description>
                Text - {this.state.posts.content}
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </Segment>
    );
  }
}

export default connect()(Home);
