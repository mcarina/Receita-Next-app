import HeaderBox from '../../../components/HeaderBox';
import { getRecipe } from "@/lib/actions/recipe.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation"
import CardRecipesID from "@/components/CardRecipesID";
import { ChefHat } from "lucide-react"

const Page = async () => {
  const loggedIn = await getLoggedInUser();
  if(!loggedIn) redirect('/sign-in')

    const recipesData = await getRecipe();
  
  return (
    <div className="Home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox
                    title='Minhas receitas'
                    subtext='As receitas que você criou ficam salvas aqui ^^'
                />
            </header>
  
          <CardRecipesID recipe={recipesData.recipes} type="recipes"/>
  
        </div>


    </div>
  )
}

export default Page