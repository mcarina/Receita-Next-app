import CardRecipesID from "@/components/CardRecipesID";
import HeaderBox from "@/components/HeaderBox";
import { getRecipe } from "@/lib/actions/recipe.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation"

const Saved = async () => {
  const loggedIn = await getLoggedInUser();
  // if(!loggedIn) redirect('/sign-in')

     const recipesData = await getRecipe();

  return (
    <div className="Home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox
                    title='Saved Recipes'
                    subtext='Seus favoritos estão aqui ^^'
                />
            </header>
        </div>
        <CardRecipesID recipe={recipesData.recipes}  type="saved"/>
        
    </div>
  )
}

export default Saved