import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';
import { postTweets } from '../actions/tweets'

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
    <div>
      <h3>Add A Tweet</h3>
      <form onSubmit={ this.handleSubmit }>
        <input value={this.state.tweet} onChange={this.handleChange} />
      </form>
    </div>
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
