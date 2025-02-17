'use server';
import { Api } from "../contexts/api";
import { cookies } from "next/headers";

export const getSavedRecipe = async () => {
    try {
        const token = cookies().get("access_token"); 
        if (!token?.value) {
            const errorMessage = "Nenhum token encontrado";
            console.log(errorMessage);
            return { error: errorMessage };
        }
        const response = await Api.get('save-recipe', {
            headers: {Authorization: `Bearer ${token.value}`},
        });

        if (response.status && response.data.saved_recipes) {
            // Agora, estamos acessando saved_recipes.data
            return response.data.saved_recipes.data;
        } else {
            return { error: response.data.message || "Erro ao buscar as receitas salvas" };
        }
    } catch (error: any) {
        console.error("Erro na requisição:", error.response?.data || error.message);
        return { error: error.response?.data?.message || "Erro ao buscar as receitas salvas" };
    }
};


export const saveRecipe = async (savedData: {
    recipe_id: number;
}) => {
    try {
        const token = cookies().get("access_token");
        if (!token) {
            const errorMessage = "Faça seu Login"; // Mensagem de erro
            console.log(errorMessage);
            return { error: errorMessage }}

        const response = await Api.post("/save-recipe", savedData, {
            headers: {Authorization: `Bearer ${token.value}`,},
        });
        return response.data;
    } catch (error: any) {
        console.error("Erro ao criar receita:", error.response?.data || error.message);
        return { error: error.response?.data?.message || error.message }; // Retorna o erro
    }
};
