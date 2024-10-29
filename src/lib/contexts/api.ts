import axios from 'axios';
import Cookies from 'js-cookie';

export const Api = axios.create({
  baseURL: process.env.NEXT_APP_API_URL,

});

// Adicione um interceptor para incluir o token em todas as requisições
Api.interceptors.request.use(
    (config) => {
      // Use js-cookie para obter o token
      const token = Cookies.get('access_token'); // Acessando o cookie
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );