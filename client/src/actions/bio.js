import axios from 'axios';

export const getBio = userId => {
    return(dispatch) => {
        axios.get(`/api/users/${userId}/bios`)
            .then( res => {
                const data = res.data;
                dispatch({ type: 'GET_BIO', bio: data })
            })
            .catch( res => {
                debugger
            })
    }
  };