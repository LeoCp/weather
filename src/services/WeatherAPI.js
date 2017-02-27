import axios from 'axios';
import * as Consts from './../config/Constants';

const BASE_USER_INFO_API = Consts.IPINFO_BASE_API;
const BASE_WEATHER_API = Consts.WEATHER_BASE_API;
const USER_INFO_ENDPOINT = `${BASE_USER_INFO_API}/json`;
const getWeatherEndpoint = (user) => `${BASE_WEATHER_API}select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${user.city}, ${user.country}") and u='c'&format=json`;

const USER_INFO_API = axios.create({ baseURL: BASE_USER_INFO_API });
const WEATHER_API = axios.create({ baseURL: BASE_WEATHER_API });

const fetchUserInfo = () => {
  return USER_INFO_API
    .get(USER_INFO_ENDPOINT)
    .then((response) => {
      return response.data;
    });
};

const fetchWeather = (user) => {
  const WEATHER_ENDPOINT = getWeatherEndpoint(user);
  return WEATHER_API
    .get(WEATHER_ENDPOINT)
    .then((response) => {
      return response.data;
    });
};

export default {
  fetchUserInfo,
  fetchWeather
}
