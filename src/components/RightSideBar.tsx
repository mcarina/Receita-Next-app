import RecipeCard from './RecipeCard';
import { TfiPlus } from "react-icons/tfi";

const RightSideBar = ({user, recipeInfo, transactions, author}: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
        <section className="flex flex-col pd-8">
            <div className="profile-banner"/>
            <div className="profile">
                <div className="profile-img">
                    <span className="text-5xl font-bold text-pink-200">
                        {user.name[0]}
                    </span>
                </div>
                <div className="profile-details">
                    <h1 className="profile-name">
                        {user.name}
                    </h1>
                    <p className="profile-email">
                        {user.email}
                    </p>
                </div>

            </div>

        </section>
        
        <section className="banks">
            <div className="flex w-full justify-between">
                <h2 className="header-2">Minha receitas</h2>
                <button className="flex gap-2"> 
                    * Vizualizar *
                </button>
            </div>
            
            <div className="flex w-full justify-between">
                <h2 className="header-2">Salvos</h2>
                <button className="flex gap-2">
                    Adicionar
                    <TfiPlus className="size-[20px] max-xl:size-20" color="black"/>
                </button>
            </div>

            {author?.length > 0 && (
                <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
                    <div className="relative z-10">
                        <RecipeCard
                            key={author[0].$id}
                            account={author[0]}
                            authorRecipe={recipeInfo.authorRecipe}
                            titleRecipe={recipeInfo.title}
                            showBalance={false} 
                        />
                    </div>
                    {author[1] &&(
                        <div className="absolute right-0 top-8 z-0 w-[90%]">
                        <RecipeCard
                            key={author[0].$id}
                            account={author[0]}
                            authorRecipe={recipeInfo.authorRecipe}
                            titleRecipe={recipeInfo.title}
                            showBalance={false} 
                        />                           
                        </div>

                    )}
                </div>
            )}
        </section>
    </aside>
  )
}

export default RightSideBar