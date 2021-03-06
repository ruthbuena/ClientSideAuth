import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from '../actions/types';


const ROOT_URL = 'http://localhost:3090';

export function signinUser ({ email, password }) {
//return function because this is how we access the dispatch (makes sure action gets sent to reducers)
  return function(dispatch) {
    // dispatch({ type: ... })-can essentially pass any logic in here; no asych with thunk
    //Submit email/pw to the server/POST request using Axios-third party library
    // shown in same way below in action creator {email: email, password: password }
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        //If request is good then
        //update state to indicate user has been auth'd
        dispatch({ type: AUTH_USER });//this is redux thunk
        //Save JWT token so that users can make follow up requests; toss into local storage
        //setItem saves to localStorage
        localStorage.setItem('token', response.data.token);

        //feature route is the route that users will end up on after logging in
        //Redirect to the route '/feature' - this is for users that are now logged in; programmatic navigation
        browserHistory.push('/feature');
      })
      .catch(() => {
      //If request is bad then
      //show an error to users
      dispatch(authError('Bad Login Info'));
      });
  }
}

export function signupUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, {email, password})
    .then(response => {
      dispatch({ type: AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/feature');
    })
    .catch(response => dispatch(authError(response.data.error)));
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}
