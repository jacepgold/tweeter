const tweets = ( state = [], action ) => {
  switch(action.type) {
    case 'TWEETS':
      return action.tweets
    case 'ADD_TWEET':
      return [action.tweet, ...state];
    default:
      return state
  }
}

export default tweets;
