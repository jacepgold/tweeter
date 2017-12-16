import axios from 'axios';

export const getPosts = (user) => {
  return (dispatch) => {
    axios.get(`/api/users/${this.props.user.id}/posts`)
      .then(res => dispatch({ type: 'Posts', apps: res.data }))
  }
}