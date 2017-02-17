import * as types from './types';
import WeatherAPI from './../../../services/WeatherAPI';

export function action(type, payload) {
  if (payload) {
    return { type, payload };
  }

  return { type };
}

export function fetchUser() {
  return (dispatch) => {
    dispatch(action(types.FETCH_USER_REQUEST));

    WeatherAPI
      .fetchUserInfo()
      .then((user) => {
        dispatch(action(types.FETCH_USER_SUCCESS, user));
      })
      .catch((error) => {
        action(types.FETCH_USER_FAILURE, error);
      });
  };
}
