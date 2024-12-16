import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RecipeTabItem } from './RecipeTabItem';
import { getRecipe } from '@/lib/actions/recipe.actions';
import RecipeInfo from './RecipeInfo';

const Recipes = async ({ id }: RecentRecipes) => {
  
  const recipesData = await getRecipe();

  if (!recipesData || !recipesData.recipes.length) {
    return (
      <section className="recent-transactions">
        <header>
          <div className="total-balance flex items-center justify-between">
            <h2 className="recent-transactions-label">Lista de receitas</h2>
            <Link href={`/recipes/?id=${id}`} className="create-btn">
              Criar Receitas
            </Link>
          </div>
        </header>
        <p>Não há receitas disponíveis no momento.</p>
      </section>
    );
  }

  return (
    <section className="recent-transactions">

      <header>
        <div className="total-balance flex items-center justify-between">
          <h2 className="recipes-label">Lista de receitas</h2>
          <Link href={`/recipes/?id=${id}`} className="p-btn">
            Criar Receitas
          </Link>
        </div>
      </header>

      <Tabs defaultValue={id} className="w-full">
        <TabsList className="recipe-title-tablist">
          {recipesData.recipes.map((recipe: Recipe) => (
            <TabsTrigger key={recipe.id} value={recipe.id}>
              <RecipeTabItem key={recipe.id} recipe={recipe} id={id} />
            </TabsTrigger>
          ))}
        </TabsList>

        {recipesData.recipes.map((recipe: Recipe) => (
          <TabsContent>
            <RecipeInfo recipe={recipe} id={id}/>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default Recipes;