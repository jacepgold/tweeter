const tweet = ( state = [], action ) => {
  switch(action.type) {
    case 'TWEETS':
      return action.todos
    case 'ADD_TWEET':
      return [action.tweet, ...state];
    default:
      return state
  }
}

export default tweet;
