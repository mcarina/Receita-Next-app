'use server';
import { Api } from "../contexts/api";

export const getRecipe = async () => {
    try {
        // Faz a requisição para a API
        const response = await Api.get('/recipes');
        const data = response.data;

        if (!data.status) {
            throw new Error("Erro ao buscar receitas: status inválido");
        }

        // Transforma os dados para incluir apenas o nome da categoria
        const transformedRecipes = data.recipe.data.map((recipe: any) => ({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            category: recipe.category?.category || 'N/A', // Nome da categoria
            user: recipe.user?.name || 'N/A', // Nome do usuário
            ingredients: Array.isArray(recipe.ingredients)
                ? recipe.ingredients.map((ingredient: any) => ({
                    name: ingredient.name,
                    amount: ingredient.amount,
                }))
                : [], // Garante que seja um array
        }));

        return {
            currentPage: data.recipe.current_page,
            lastPage: data.recipe.last_page,
            recipes: transformedRecipes, // Retorna receitas transformadas
        };
    } catch (error: any) {
        console.error("Erro ao buscar receitas:", error.message);
        throw new Error("Não foi possível carregar as receitas");
    }
};