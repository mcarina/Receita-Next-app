import HeaderBox from "@/components/HeaderBox";
import Recipes from "@/components/Recipes";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  // const loggedIn = await getLoggedInUser();

    return (
      <section className= "home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Recipe Aplication"
              // user={loggedIn?.name  || ' '}
              subtext="Descubra novas inspirações culinárias e transforme suas refeições em momentos inesquecíveis."
            />

          </header>

          <Recipes 
            id={id as string}
            page={currentPage}
          />

        </div>
        
      </section>
    );
}
export default Home