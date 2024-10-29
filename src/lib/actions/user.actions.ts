'use server';
import { Api } from "../contexts/api";
import Cookies from 'js-cookie';

export const signIn = async (email: string, password: string) => {
    try {
        const response = await Api.post('/login', {
            email,
            password
        });
        if (response.data.status) {
            const token = response.data.token; 
            Cookies.set('access_token', token, { expires: 7 }); 
            console.log('Login bem-sucedido:', token);
            return response.data; 
        } else {
            console.error('Erro na resposta da API:', response.data);
        }
    } catch (error) {
        console.log('Error', error);
    }
}

export const signUp = async ( userData: SignUpParams) => {
    try {
        const response = await Api.post('/users', userData);
        if (response.status === 201) {
            console.log('Cadastro bem-sucedido:', response.data);
            return response.data; // Retorna a resposta, caso queira
        } else {
            console.error('Erro na resposta da API:', response.data);
            return null;
        }
    } catch (error) {
        console.log('Error', error);
        return null;
    }
}