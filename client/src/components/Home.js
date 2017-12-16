import React, { Component } from 'react';
import { Header, List, Segment, Card, Image, Button, Grid } from 'semantic-ui-react';
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

  render() {
    const { posts } = this.state;

    return (
      <Segment basic>
        <Header as="h1" textAlign='center'>Tweeter Feed</Header>
        <Grid>
          <Grid.Row>
          <Grid.Column width={8}>
        <Card.Group>
          { this.state.posts.map( post =>
          <Card>
            <Card.Content>
              <Image floated='right' size='mini' src='https://react.semantic-ui.com/assets/images/avatar/large/molly.png' />
              <Card.Header>
                Name - {  }
              </Card.Header>
              <Card.Meta>
                Date - {  }
              </Card.Meta>
              <Card.Description>
                {post.content}
              </Card.Description>
            </Card.Content>
          </Card>
          )}
        </Card.Group>
        </Grid.Column>
        </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user}
}

export default withRouter(connect(mapStateToProps)(Home));
