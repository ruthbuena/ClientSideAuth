//whether user is authenticated
import {
  AUTH_USER,
  UNAUTH_USER
} from '../actions/types';

export default function (state={}, action) {
  switch(action.type) {
//Boolean to show if user has been authenticated
    case AUTH_USER:
      return { ...state, authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
  }

  return state;
}
