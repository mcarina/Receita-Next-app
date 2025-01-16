import HeaderBox from "@/components/HeaderBox";
import Saveds from "@/components/Saveds";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation"

const Saved = async () => {
  const loggedIn = await getLoggedInUser();
  if(!loggedIn) redirect('/sign-in')

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

        <Saveds/>
    </div>
  )
}

export default Saved