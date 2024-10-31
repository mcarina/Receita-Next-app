import RecipeSideBar from '@/components/RecipeSideBar';
import RightSideBar from '@/components/RightSideBar'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { redirect } from "next/navigation"

const Perfil = async () => {
  const loggedIn = await getLoggedInUser();
  if(!loggedIn) redirect('/sign-in')

  const recipes = {
    title: "breakfast",
    authorRecipe: "author breakfast",
  }
  
  return (
    <section className="home">
        <RightSideBar 
          user={loggedIn}
          recipeInfo={recipes}
          transactions={[]}
          author={[{ currentAuthor: 'autor'},{ currentAuthor: 'autor:'}]}
        />

        <RecipeSideBar   
          user={loggedIn}
          recipeInfo={recipes}
          transactions={[]}
          author={[{ currentAuthor: 'autor'},{ currentAuthor: 'autor:'}]}
        />
    </section>
  )
}

export default Perfil