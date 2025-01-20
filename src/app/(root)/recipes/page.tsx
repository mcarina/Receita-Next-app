import HeaderBox from '../../../components/HeaderBox';
import { getRecipe } from "@/lib/actions/recipe.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation"
import CardRecipesID from "@/components/CardRecipesID";

const Page = async () => {
  const loggedIn = await getLoggedInUser();
  if(!loggedIn) redirect('/sign-in')

    const recipesData = await getRecipe();
  
  return (
    <div className="Home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox
                    title='My recipes'
                    subtext='As receitas que você criou ficam salvas aqui ^^'
                />
            </header>
        </div>

        <CardRecipesID recipe={recipesData.recipes} type="recipes"/>

    </div>
  )
}

export default Page