import { GiNotebook, GiCook, GiChefToque   } from "react-icons/gi";

export const sidebarLinks = [
    {
      icon: GiChefToque  , 
      route: "/",
      label: "Home",
    },
    // {
    //   icon: GiCook ,
    //   route: "/perfil",
    //   label: "Perfil",
    // },
    {
      // icon: GiCook ,
      route: "/recipes",
      label: "MyRecipes",
    },
    {
      // icon: GiCook ,
      route: "/saved",
      label: "Saved",
    },
  ];