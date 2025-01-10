"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import HeaderBox from "@/components/HeaderBox";
import { getRecipeID } from "@/lib/actions/recipe.actions";

export default function ReceitasID({ recipe }: MyRecipesProps) {
  const params = useParams();
  const [receita, setReceita] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const recipeData = await getRecipeID(params.id); // Passando o id da receita
      console.log(recipeData)
      if (recipeData.error) {
        setError(recipeData.error);
      } else {
        setReceita(recipeData); // Definindo os dados da receita no estado
      }
      setLoading(false); // Finalizando o carregamento
    };

    fetchRecipe();
  }, [params.id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <main className="Home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            title={receita.title} // Exibe o título da receita
            subtext={receita.description} // Exibe a descrição da receita
          />
        </header>

        <section>
          <article>
            <h2>{receita.title}</h2>
            <p>{receita.description}</p>
            <h3>Ingredientes:</h3>
            <ul>
              {receita.ingredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.name}</li>
              ))}
            </ul>
          </article>
        </section>
      </div>
    </main>
  );
}
