import RightSideBar from '@/components/RightSideBar'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { redirect } from "next/navigation"

const Perfil = async () => {
  const loggedIn = await getLoggedInUser();
  if(!loggedIn) redirect('/sign-in')
  
  return (
    <section className="home">
      <>
      espaço
      </>
        <RightSideBar 
          user={loggedIn}
          // recipeInfo={recipes}
          // transactions={[]}
          // author={[{ currentAuthor: 'autor'},{ currentAuthor: 'autor:'}]}
        />
    </section>
  )
}

export default Perfil