import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RecipeTabItem } from './RecipeTabItem';
import { getRecipe } from '@/lib/actions/recipe.actions';
import RecipeInfo from './RecipeInfo';
import Search from "./Search";
import { Button } from "./ui/button";

const Recipes = async ({ id }: RecipeProps) => {
  const recipesData = await getRecipe(); // Busca todas as receitas
  const activeRecipes = recipesData.recipes.filter((recipe: RecipeProps) => recipe.status === "ativo");
  
  const uniqueCategories = Array.from(
    new Set(recipesData.recipes.map((recipe: Recipe) => recipe.category))
  );
  
  if (!recipesData || !recipesData.recipes.length) {
    return (
      <section className="recent-transactions">
        <p>Erro de conexão.</p>
      </section>
    );
  }

  return (
    <section className="home-body">

      <header>
        <div className="nav-home">
          <div className="relative flex-1">
            <Search/>
          </div>
          <div>
            <Button className="p-btn1"> Buscar </Button>
          </div>
        </div>
      </header>

      <Tabs defaultValue={id} className="w-full">
        <TabsList className="recipe-title-tablist">
          {uniqueCategories.map((category, index) => (
              <TabsTrigger key={index} value={category}>
                <RecipeTabItem category={category} />
              </TabsTrigger>
            ))}
        </TabsList>
        
      <div className="grid md:grid-cols-2 gap-6">
        {activeRecipes.map((recipe: Recipe) => (
          <TabsContent>
            <RecipeInfo recipe={recipe} id={id}/>
          </TabsContent>
        ))}
      </div>

     </Tabs>


    </section>
  );
};

export default Recipes;