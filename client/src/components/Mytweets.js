import React from 'react';
import { connect } from 'react-redux';

class Mytweets extends React.Component {
  state = {myTweets: []}

  render() {
    return(
      <div>

      <h1>My Tweets</h1>
      <ul>
      { this.state.myTweets.map( (t,i) => {
        return (
          <li key={i}>
          {t}
          </li>
        )
      })
    }
    </ul>
    </div>
  )
  }

}

const mapStateToProps = (state) => {
  return { mytweets: state.mytweets }
}

export default connect(mapStateToProps)(Mytweets)
