'use client'
import { useState, useEffect } from 'react';
import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Home = () => {
  const [loggedIn, setLoggedInUser] = useState<User | null>(null);
  
  useEffect(() => {
    const fetchUser = async () => {
        const user = await getLoggedInUser();
        console.log('Usuário logado:', user); // Log do usuário
        setLoggedInUser(user);
    };

    fetchUser();
  }, []);

  const recipes = {
    title: "breakfast",
    authorRecipe: "author breakfast",
  }
    return (
      <section className= "home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Bem-Vindo(a) "
              user={loggedIn?.name  || 'visitante'}
              subtext="Descubra receitas novas para os almoços em família."

            />
          </header>

          Receitas aqui
        </div>

        <RightSideBar 
          user={loggedIn}
          recipeInfo={recipes}
          transactions={[]}
          author={[{ currentAuthor: 'autor'},{ currentAuthor: 'autor:'}]}
        />

      </section>
    );
}
export default Home