import HeaderBox from "@/components/HeaderBox";

const Home = () => {
  
  const loggedIn = { firstName: 'Márcia'};
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
        </div>
      </selection>
    );
}
export default Home