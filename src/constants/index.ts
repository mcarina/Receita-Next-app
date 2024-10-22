import { GiNotebook, GiCook, GiChefToque   } from "react-icons/gi";

export const sidebarLinks = [
    {
      icon: GiChefToque  , 
      route: "/",
      label: "Home",
    },
    {
      icon: GiCook ,
      route: "/perfil",
      label: "Meu Perfil",
    },
    {
      icon: GiNotebook , 
      route: "/receitas",
      label: "minhas receitas",
    },
  ];