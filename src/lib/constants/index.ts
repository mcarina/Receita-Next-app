import { Coffee, UtensilsCrossed, Users } from "lucide-react"

export const sidebarLinks = [
    {
      icon: Coffee, 
      route: "/",
      label: "Home",
    },
    // {
    //   icon: GiCook ,
    //   route: "/perfil",
    //   label: "Perfil",
    // },
    {
      icon: UtensilsCrossed  ,
      route: "/recipes",
      label: "MyRecipes",
    },
    {
      icon: Users ,
      route: "/saved",
      label: "Saved",
    },
  ];