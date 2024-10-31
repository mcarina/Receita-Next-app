import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox ";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = async () => {

const loggedIn = await getLoggedInUser();

    return (
      <section className= "home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Bem-Vindo(a) "
              user={loggedIn?.name  || ' '}
              subtext="Descubra receitas novas para os almoços em família."

            />

            <TotalBalanceBox/>

          </header>

        </div>
        
      </section>
    );
}
export default Home