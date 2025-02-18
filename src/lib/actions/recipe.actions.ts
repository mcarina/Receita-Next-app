'use server';
import { Api } from "../contexts/api";
import { cookies } from "next/headers";

export const getRecipe = async () => {
    try {
        const response = await Api.get('/recipes');
        const data = response.data;
        if (!data.status) { throw new Error("Erro ao buscar receitas: status inválido") }
        const transformedRecipes = data.recipe.data.map((recipe: any) => ({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            status: recipe.status,
            time: recipe.time,
            typeTime: recipe.type_time,
            porcoes: recipe.porcoes,
            category: recipe.category?.category || 'N/A',
            preparationMethod: recipe.preparation_method,
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
        const mockRecipes = [
            {
                id: 1,
                title: "Recipe 1",
                description: "This is a mock description for recipe 1.",
                category: "Breakfast",
                user: "John Doe",
                status: "ativo",
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
                status: "ativo",
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

export const createRecipe = async (recipeData: {
    title: string;
    description: string;
    preparation_method: string;
    category_id: string;
    time: number, 
    type_time: string, 
    porcoes: number, 
    status: string,
    ingredients: { name: string; amount: string }[];
}) => {
    try {
        const token = cookies().get("access_token");
        if (!token) {
            const errorMessage = "Faça seu Login"; // Mensagem de erro
            console.log(errorMessage);
            return { error: errorMessage }}

        const response = await Api.post("/recipes", recipeData, {
            headers: {Authorization: `Bearer ${token.value}`,},
        });
        return response.data;
    } catch (error: any) {
        console.error("Erro ao criar receita:", error.response?.data || error.message);
        return { error: error.response?.data?.message || error.message }; // Retorna o erro
    }
};

export const getRecipeID = async (id: string) => {
    try {
        const token = cookies().get("access_token"); 
        if (!token?.value) {
            const errorMessage = "Nenhum token encontrado";
            console.log(errorMessage);
            return { error: errorMessage };
        }
        const response = await Api.get(`recipes/${id}`, {
            headers: {Authorization: `Bearer ${token.value}`,},
        });

        if (response.status && response.data.recipe) {
            return response.data.recipe;
        } else {
            return { error: response.data.message || "Erro ao buscar a receita" };
        }
    } catch (error: any) {
        console.error("Erro na requisição:", error.response?.data || error.message);
        return { error: error.response?.data?.message || "Erro ao buscar a receita" };
    }
};

export const getSearch = async (query: string) => {
    if (query.length > 2) {
        try {
            const response = await Api.get('/search-recipes', {
                params: { query },
            });
            return response.data;
        } catch (error) {
            console.error("Erro ao buscar receitas:", error);
            return [];
        }
    }
    return [];
};

export const destroyRecipeID = async (id: string) => {
    try{
        const token = cookies().get("access_token");
        if(!token?.value){
            const errorMessage = "Nenhum token encontrado";
            console.log(errorMessage);
            return { error: errorMessage };
        }

        console.log("Token encontrado:", token.value);
        const response = await Api.delete(`recipes/${id}`, {
            headers: {Authorization: `Bearer ${token.value}`,},
        });

        if (response.status && response.data.recipe) {
            return response.data.recipe;
        } else {
            return { error: response.data.message || "Erro ao buscar a receita" };
        }

    }catch (error: any){
        console.error("Erro na requisição:")
    }
}
