import MyRecipes from "@/components/MyRecipes";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation"

const Page = async () => {
  const loggedIn = await getLoggedInUser();
  if(!loggedIn) redirect('/sign-in')
  
  return (
    <section className="Home">
      <MyRecipes />
    </section>
  )
}

export default Page