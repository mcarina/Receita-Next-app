'use server';
import { Api, setAuthHeader } from "../contexts/api";
import { cookies } from "next/headers";

export const signIn = async (email: string, password: string) => {
    try {
        const response = await Api.post('/login', { email, password });
        if (response.data.status) {
            const token = response.data.token;

            cookies().set('access_token', token, {
                httpOnly: true, 
                path: '/',
                expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            });
            console.log('Token armazenado no cookie:', token);
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
        const token = cookies().get('access_token');
        if (!token) {
            console.log('Nenhum token encontrado');
            return null; 
        }

        const response = await Api.get('/user-info', {
            headers: {
                Authorization: `Bearer ${token.value}`,
            },
        });

        if (response.data.status) {
            return response.data.user;
        } else {
            console.error('Erro ao recuperar os dados do usuário:', response.data);
            return null;
        }
    } catch (error) {
        console.error('Erro ao buscar informações do usuário:', error);
        return null;
    }
};

export const logoutAccount = async () => {
    try {
        const token = cookies().get('access_token');
        if (!token) {
            console.log('Nenhum token encontrado');
            return null; 
        }

        const response = await Api.post('/logout', {}, { 
            headers: { 
                Authorization: `Bearer ${token.value}` 
            } 
        });
        if (response.data.status) {
            cookies().delete('access_token'); // Exclui o cookie
            setAuthHeader(null);
            return true;
        } else {
            console.error('Erro ao deslogar:', response.data.message);
            return false;
        }
    } catch (error) {
        console.error('Erro ao deslogar:', error);
        return false;
    }
};

