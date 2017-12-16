import React from 'react';
import { connect } from 'react-redux';
import { getTweets } from '../actions/tweets'


class MyTweets extends React.Component {

  componentWillMount() {

  }

  render() {
    return(
      <div>

      <h1>My Tweets</h1>
      { this.props.tweets.map(tweet => {
        return (
          <div key={tweet.id}>
            {tweet.content}
          </div>
        )
      })}

    </div>
  )
  }

}

const mapStateToProps = (state) => {
  return { tweets: state.tweets, user: state.user }
}

export default connect(mapStateToProps)(MyTweets)
