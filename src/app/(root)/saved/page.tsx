import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation"

const Saved = async () => {
  const loggedIn = await getLoggedInUser();
  if(!loggedIn) redirect('/sign-in')
      
  return (
    <section className="home">
        receitas salvas
    </section>
  )
}

export default Saved