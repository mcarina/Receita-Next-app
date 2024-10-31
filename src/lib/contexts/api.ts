'use server'
import axios from 'axios';

export const Api = axios.create({
  baseURL: process.env.NEXT_APP_API_URL,

});

export const setAuthHeader = (token) => {
  if (token) {
    Api.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    delete Api.defaults.headers.Authorization; // Remova se não houver token
  }
};
