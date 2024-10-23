import Link from 'next/link';

const RecipeCard = ({account, authorRecipe, titleRecipe, showBalance = true}: RecipesProps) => {
  return (
    <div className="flex flex-col">
        <Link href="/" className="bank-card">
            <div className="bank-card_content">
                <div>
                    <h1 className="text-16 font-semibold text-white">
                        {account.name || titleRecipe}
                    </h1>
                    <p className="font-ibm-plex-serif font-black text-white">
                        {authorRecipe}
                    </p>
                </div>

                <article className=" flex flex-cil gap-2">
                    <div className="flex justify-between">
                        <h1 className="text-12 font-semibold text-white">
                            imagem
                        </h1>
                    </div>

                </article>
            </div>

            <div className="bank-card_icon">
                <image src="" className="ml-5"/>
            </div>   
        </Link>

    </div>
  )
}

export default RecipeCard