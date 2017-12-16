import axios from 'axios';

export const getTweets = (user) => {
  return(dispatch) => {
    axios.get(`/api/users/${user.id}/posts`)
      .then( res => {
        const data = res.data
        dispatch({ type: 'TWEETS', tweets: data })
      }
    )
  }
}

export const postTweets = (user, tweet) => {
  return(dispatch) => {
    axios.post(`/api/users/${user.id}/posts`, { post: { content: tweet } } )
      .then( res => {
        const data = res.data
        dispatch({ type: 'ADD_TWEET', tweet: data })
      }
    )
  }
}
