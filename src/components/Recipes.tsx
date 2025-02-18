"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RecipeTabItem } from './RecipeTabItem';
import { getRecipe } from '@/lib/actions/recipe.actions';
import RecipeInfo from './RecipeInfo';
import Search from "./Search";

const Recipes = ({ id }: RecipeProps) => {
  const [recipesData, setRecipesData] = useState<RecipeProps[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<RecipeProps[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar receitas e atualizar o estado
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getRecipe();
        const activeRecipes = data.recipes.filter((recipe: RecipeProps) => recipe.status === "ativo");

        setRecipesData(activeRecipes);
        setFilteredRecipes(activeRecipes); 

        setCategories(Array.from(new Set(activeRecipes.map(recipe => recipe.category))));

      } catch (error) {
        console.error("Erro ao buscar receitas:", error);
      } finally {
        setLoading(false);
      }
    }; fetchRecipes()}, []);

  const handleSearch = (query: string) => {
    if (!query.trim()) { setFilteredRecipes(recipesData); return; } // retorna todas as receitas se estiver vazio
    const filtered = recipesData.filter(recipe => recipe.title.toLowerCase().includes(query.toLowerCase()));
    setFilteredRecipes(filtered);
  };

  if (loading) { return <p>Carregando receitas...</p> }

  if (!recipesData.length) {
    return (
      <section className="recent-transactions">
        <p>Erro de conexão.</p>
      </section>
    );
  }

  return (
    <section className="home-body">
      <header>
        <Search onSearch={handleSearch} />
      </header>

      <Tabs defaultValue="todos" className="w-full">
        <TabsList className="recipe-title-tablist">
          <TabsTrigger value="todos">Todos</TabsTrigger>
          {categories.map((category, index) => (
            <TabsTrigger key={index} value={category}>
              <RecipeTabItem category={category} />
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Exibe todas as receitas quando "Todos" é selecionado */}
        <TabsContent value="todos">
          <div className="grid md:grid-cols-2 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeInfo key={recipe.id} recipe={recipe} id={id} />
            ))}
          </div>
        </TabsContent>

        {/* Exibe receitas filtradas por categoria */}
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid md:grid-cols-2 gap-6">
              {filteredRecipes
                .filter(recipe => recipe.category === category)
                .map((recipe) => (
                  <RecipeInfo key={recipe.id} recipe={recipe} id={id} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default Recipes;
