'use server';
import { Api } from "../contexts/api";
import { cookies } from "next/headers";

export const getRecipe = async () => {
    try {
        const response = await Api.get('/recipes');
        const data = response.data;

        if (!data.status) { throw new Error("Erro ao buscar receitas: status inválido"); }

        const transformedRecipes = data.recipe.data.map((recipe: any) => ({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            category: recipe.category?.category || 'N/A',
            user: recipe.user?.name || 'N/A',
            ingredients: Array.isArray(recipe.ingredients)
                ? recipe.ingredients.map((ingredient: any) => ({
                    name: ingredient.name,
                    amount: ingredient.amount,
                })) : [], // Garante que seja um array
        }));

        return {
            currentPage: data.recipe.current_page,
            lastPage: data.recipe.last_page,
            recipes: transformedRecipes, // Retorna receitas transformadas
        };
    } catch (error: any) {
        console.error("Erro ao buscar receitas:", error.message);
        // Dados mockados para fallback
        const mockRecipes = [
            {
                id: 1,
                title: "Recipe 1",
                description: "This is a mock description for recipe 1.",
                category: "Breakfast",
                user: "John Doe",
                ingredients: [
                    { name: "Ingredient 1", amount: "2 cups" },
                    { name: "Ingredient 2", amount: "1 tbsp" },
                ],
            },
            {
                id: 2,
                title: "Recipe 2",
                description: "This is a mock description for recipe 2.",
                category: "Dinner",
                user: "Jane Doe",
                ingredients: [
                    { name: "Ingredient A", amount: "100g" },
                    { name: "Ingredient B", amount: "200ml" },
                ],
            },
        ];

        // Retorna os dados mockados
        return {
            currentPage: 1,
            lastPage: 1,
            recipes: mockRecipes,
        };
    }
};

export const postRecipe = async (recipeData: {
    title: string;
    description: string;
    preparation_method: string;
    category_id: string;
    ingredients: { name: string; amount: string }[];
}) => {

    try {
        const token = cookies().get("access_token");
        if (!token) {
            console.log("Nenhum token encontrado");
        return null;
    }

    const response = await Api.post("/recipes", recipeData, {
        headers: {
            Authorization: `Bearer ${token.value}`,
        },
    });

    return response.data;
    
    } catch (error: any) {
        console.error("Erro ao criar receita:", error.response?.data || error.message);
        throw new Error("Falha ao enviar os dados da receita.");
    }
    };