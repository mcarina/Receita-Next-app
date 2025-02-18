import { ChefHat } from "lucide-react"

const HeaderBox = ({ type = "title", title, subtext, user }: HeaderBoxProps) => {
  return (
    <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 flex items-center justify-center">
            {type === 'greeting' && ( <ChefHat className="w-10 h-10 mr-2" /> )}
            
            {title}

            {type === 'greeting' && ( 
              <>
                <span className='text-bankGradient'>{user}</span>
              </>
              )}
        </h1>

        <p className="header-box-subtext">{subtext}</p>
    </div>
  )
}

export default HeaderBox