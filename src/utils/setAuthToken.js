import axios from 'axios';
import { axiosURL } from '../actions/types';

axios.defaults.baseURL = axiosURL;

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
