import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postTweets } from '../actions/tweets'
import { Header, Segment, Container, Button, Checkbox, Form } from 'semantic-ui-react'

class Newtweet extends Component {
 // let input;

 state = {tweet: ''}

 handleSubmit = (e) => {
   e.preventDefault();
   const tweet = this.state.tweet
   const user = this.props.user
   this.props.dispatch(postTweets(user, tweet))
 }

 handleChange = (e) => {
   this.setState({tweet: e.target.value})
 }

render() {

  return (
    <Segment>
      <Container>
        <Header as="h1" center>Compose A Tweet</Header>
        <Form onSubmit={ this.handleSubmit }>
          <input value={ this.state.tweet } onChange={ this.handleChange } placeholder='Tweet' />
          <Button type="submit">Tweet!</Button>
        </Form>
      </Container>
    </Segment>
  )
}
}

const mapStateToProps = state => {
  return ({
    user: state.user,
    tweets: state.tweets
  })

}

export default connect(mapStateToProps)(Newtweet);
