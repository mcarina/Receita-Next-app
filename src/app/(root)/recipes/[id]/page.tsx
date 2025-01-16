"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import HeaderBox from "@/components/HeaderBox";
import { getRecipeID } from "@/lib/actions/recipe.actions";
import EditRecipe from "@/components/EditRecipe";

export default function ReceitasID({ recipe }: MyRecipesProps) {
  const params = useParams();
  const [receita, setReceita] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      const recipeData = await getRecipeID(params.id); 
        setReceita(recipeData);
        setLoading(false); // Finalizando o carregamento
    };

    fetchRecipe();
  }, [params.id]);

  if (loading) { return <div>Carregando...</div> }

  return (
    <main className="Home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            title={receita.title}
            subtext={receita.description}
          />
        </header>

        <section>
          <article>
            {/* <h2>{receita.title}</h2> */}
            {/* <p>{receita.description}</p> */}
            <h2 className="recipes-label" >Ingredientes:</h2>

            <div className='flex grid-cols-2 gap-8 py-1'>
              <ul>
                {receita.ingredients.map((ingredient) => (
                  <li key={ingredient.id}> - {ingredient.name}</li>
                ))}
              </ul>
              <ul>
                {receita.ingredients.map((ingredient) => (
                  <li key={ingredient.id}>- {ingredient.amount}</li>
                ))}
              </ul>
            </div>
            
            <div className="py-7">
              <h2 className="recipes-label" >Modo de preparo:</h2>
              <ul>
                  <li> {receita.preparation_method}</li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
