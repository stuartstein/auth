import axios from 'axios';

const API_URL = 'https://localhost:3090';


export function signinUser({ email, password }) {
  return function(dispatch) {
    // submit email/password to server
    axios.post(`${API_URL}/signin`, { email, password });
    // if request is good...
    // - update state to indicate user is authenticated
    // - save JWT token
    // - redirect to the route '/feature'

    // if request is bad..
    // - Show an error to the user

  }
}
