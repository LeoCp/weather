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

export function fetchWeather(user) {
  return (dispatch) => {
    dispatch(action(types.FETCH_WEATHER_REQUEST));

    WeatherAPI
      .fetchWeather(user)
      .then((wather) => {
        dispatch(action(types.FETCH_WEATHER_SUCCESS, wather));
      })
      .catch((error) => {
        action(types.FETCH_WEATHER_FAILURE, error);
      });
  };
}
