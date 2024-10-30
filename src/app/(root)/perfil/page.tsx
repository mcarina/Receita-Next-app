import RightSideBar from '@/components/RightSideBar'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Perfil = async () => {
  const loggedIn = await getLoggedInUser();

  const recipes = {
    title: "breakfast",
    authorRecipe: "author breakfast",
  }
  
  return (
    <div>
        <RightSideBar 
          user={loggedIn}
          recipeInfo={recipes}
          transactions={[]}
          author={[{ currentAuthor: 'autor'},{ currentAuthor: 'autor:'}]}
        />
    </div>
  )
}

export default Perfil