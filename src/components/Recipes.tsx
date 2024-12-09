import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RecipeTabItem } from './RecipeTabItem';
import { getRecipe } from '@/lib/actions/recipe.actions';

const Recipes = async ({ id }: RecentRecipes) => {
  
  const recipesData = await getRecipe();

  if (!recipesData || !recipesData.recipes.length) {
    return (
      <section className="recent-transactions">
        <header className="flex items-center justify-between">
          <h2 className="recent-transactions-label">Lista de receitas</h2>
          <Link href={`/recipes/?id=${id}`} className="view-all-btn">
            ver todos
          </Link>
        </header>
        <p>Não há receitas disponíveis no momento.</p>
      </section>
    );
  }

  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <h2 className="recent-transactions-label">Lista de receitas</h2>
        <Link href={`/recipes/?id=${id}`} className="view-all-btn">
          ver todos
        </Link>
      </header>

      <Tabs defaultValue={id} className="w-full">
        <TabsList className="recent-transactions-tablist">
          {recipesData.recipes.map((recipe) => (
            <TabsTrigger key={recipe.id} value={recipe.category.category}>
              <RecipeTabItem item={recipe} activeId={id} queryKey="category" />
            </TabsTrigger>
          ))}
        </TabsList>

        {recipesData.recipes.map((recipe) => (
          <TabsContent
            key={recipe.id}
            value={recipe.category.category}
            className="space-y-4"
          >
            <div>
              <p><strong>{recipe.title}</strong></p> 
              <p>{recipe.description}</p>

              <p><strong>ingredients:</strong></p> 
              <ul>
                {recipe.ingredients.map((ingredient, id) => (
                  <li key={id}>
                    {ingredient.name}: {ingredient.amount}
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default Recipes;
