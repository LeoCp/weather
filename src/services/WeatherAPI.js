import axios from 'axios';
import Consts from './../config/Constants';

const BASE_USER_INFO_API = Consts.IPINFO_BASE_API;
const USER_INFO_ENDPOINT = `${BASE_USER_INFO_API}/json`;

const USER_INFO_API = axios.create({
  baseURL: BASE_USER_INFO_API,
  timeout: 600
});

export const fetchUserInfo = (projectId) => {
  return USER_INFO_API
    .get(USER_INFO_ENDPOINT)
    .then((response) => {
      return response.data;
    });
};
