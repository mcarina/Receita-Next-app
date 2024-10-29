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
            return response.data; // Retorna a resposta
        } else {
            console.error('Erro na resposta da API:', response.data);
            return null;
        }
    } catch (error) {
        console.log('Error', error);
        return null;
    }
}

export const getLoggedInUser = async () => {
    try {
        const token = Cookies.get('access_token'); // Obtém o token
        console.log('Token de autenticação:', token); // Log do token

        const response = await Api.get('/user-info', {
            headers: {
                Authorization: `Bearer ${token}`, // Adiciona o token de autenticação
            },
        });

        console.log('Resposta da API:', response.data); // Log da resposta da API

        if (response.data.status) {
            return response.data.user; // Retorna os dados do usuário
        } else {
            console.error('Erro ao recuperar os dados do usuário:', response.data);
            return null;
        }
    } catch (error) {
        console.error('Error ao buscar usuário:', error); // Log do erro
        return null;
    }
};
