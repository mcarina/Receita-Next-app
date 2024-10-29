import axios from 'axios';
import Cookies from 'js-cookie';

export const Api = axios.create({
  baseURL: process.env.NEXT_APP_API_URL,

});

Api.interceptors.request.use(
    (config) => {
      const token = Cookies.get('access_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );