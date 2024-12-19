import RightSideBar from '@/components/RightSideBar'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { redirect } from "next/navigation"

const Perfil = async () => {
  const loggedIn = await getLoggedInUser();
  if(!loggedIn) redirect('/sign-in')
  
  return (
    <section className="home">
      <>
      espaço espaço espaço espaço espaço espaço espaço espaço espaço espaço espaço espaço espaço espaço espaço espaço espaço espaço
      </>
        <RightSideBar 
          user={loggedIn}
        />
    </section>
  )
}

export default Perfil