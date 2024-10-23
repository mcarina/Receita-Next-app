import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";

const Home = () => {
  
  const loggedIn = { 
    firstName: 'Márcia', 
    lastName: 'Apolinário',
    email: 'QWUjv@example.com' 
  };

  const recipes = {
    title: "breakfast",
    authorRecipe: "author breakfast",
  }
    return (
      <selection className= "home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Bem-Vindo(a) "
              user={loggedIn.firstName} 
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

      </selection>
    );
}
export default Home