import * as types from './../actions/types';
import * as user from './reducer';

export const initialstate = {
  user: null,
  isUserLoading: false
};

export default function reducer(state = initialstate, action = {}) {
  switch (action.type) {
    case types.FETCH_USER_REQUEST:
      return user.fetchUserRequest(state);
    case types.FETCH_USER_SUCCESS:
      return user.fetchUserSuccess(state, action);
    case types.FETCH_USER_FAILURE:
      return user.fetchUserFailure(state);
    default:
      return state;
  }
}
