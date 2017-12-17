const bio = (state = {}, action) => {
    switch (action.type) {
      case 'GET_BIO':
        return action.bio
      default:
        return state;
    }
  };
  
export default bio;