import RecipeCard from './RecipeCard';

const RecipeSideBar = ({user, recipeInfo, transactions, author}: RecipeSideBarProps) => {
  return (
    <aside className="right-sidebar">
        <section className="flex flex-col pd-8">
            <div className="profile">
                funciona
            </div>

        </section>
        
        <section className="banks">
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

export default RecipeSideBar