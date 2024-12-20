import RightSideBar from '@/components/RightSideBar'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { redirect } from "next/navigation"
// import MyRecipes from '../minhas-receitas/page';

const Perfil = async () => {
  const loggedIn = await getLoggedInUser();
  if(!loggedIn) redirect('/sign-in')
  
  return (
    <section className="home">
        <>
        espaçoespaçoespaçoespaçoespaçoespaçoespaçoespaçoespaçoespaçoespaçoespaçoespaçoespaçoespaçoespaço espaço
        </>
        <RightSideBar 
          user={loggedIn}
        />
    </section>
  )
}

export default Perfil