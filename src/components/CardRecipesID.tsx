"use client"
import Image from "next/image"
import { useState } from 'react';
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Clock, Users, Eye, Trash2, Edit3, BookmarkX } from "lucide-react"
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

import { destroyRecipeID } from "@/lib/actions/recipe.actions";
import ModalCreate from "./ModalCreate";

const CardRecipesID = ({ recipe, type }: RecipeProps) => {
  const router = useRouter();
  const [recipes, setRecipes] = useState(recipe); 

  const handleRedirect = (id: string) => {
    router.push(`recipes/${id}`);
  };

  const handleRedirectVerMais = (id: string) => {
    router.push(`recipes/${id}/edit`);
  };

  const handleDelete = async (id:string) => {
    const confirmDelete = window.confirm("Tem certeza de que deseja deletar esta receita?");
    if (!confirmDelete) return;
    
    await destroyRecipeID(id);
    setRecipes((prev) => prev.filter((item) => item.id !== id));
    alert("receita deletada com sucesso")
  }

  const getStatusLabel = (status) => {
    switch (status) {
      case "ativo":
        return "Publicado";
      case "inativo":
        return "Rascunho";
      default:
        return "Desconhecido";
    }
  }
  const getStatusColor = (status) => {
    switch (status) {
      case "ativo":
        return "absolute top-2 right-2 z-10 bg-green-500 text-white text-xs px-2 py-1 rounded-full"
      case "inativo":
        return "absolute top-2 right-2 z-10 bg-yellow-500  text-white text-xs px-2 py-1 rounded-full"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <div className="home-body">
        {type === "recipes" && (
        <div className="nav-home">
          <div className="flex gap-4 p-btn1">
              <ModalCreate/>
          </div>
        </div>
        )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipe.map((recipeItem) => (
          <Card key={recipeItem.id} className="card-border">
              <div className="relative h-48">
              {type === "recipes" && (
                <div className={`ml-auto ${getStatusColor(recipeItem.status)}`}>
                    {getStatusLabel(recipeItem.status)}
                </div>
              )}
                <Image src="/placeholder.svg?height=200&width=400" alt="Recipe 1" fill className="object-cover" />
            </div>

            <CardHeader className="flex-grow">
              <h2>{recipeItem.title}</h2>
              <div className="card-subtext">
                <span className="flex items-center">
                  <Clock className="icons-lucide" />
                  {recipeItem.time}{recipeItem.typeTime}
                </span>
                <span className="flex items-center">
                  <Users className="icons-lucide" />
                  {recipeItem.porcoes} porções
                </span>
                
                {type === "recipes" && (
                  <span className="flex items-center">
                    <Eye className="icons-lucide" />
                    1k
                  </span>
                )}
              </div>
              <p>{recipeItem.description.length > 35 ? recipeItem.description.slice(0, 35) + '...' : recipeItem.description}</p>
            </CardHeader>


            <CardFooter className="gap-1">
              <Button variant="outline" size="sm" className="flex-1" onClick={() => handleRedirect(recipeItem.id)}>
                <Eye className="icons-lucide" />
                Ver mais...
                </Button>

                {type === "saved" && (
                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                  <BookmarkX className="icons-lucide" />
                </Button> 
                )}

              {type === "recipes" && (
                <>
                <Button variant="outline" size="sm" onClick={() => handleRedirectVerMais(recipeItem.id)}>
                  <Edit3 className="icons-lucide" />
                </Button>

                <Button onClick={() => handleDelete(recipeItem.id)} variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                  <Trash2 className="icons-lucide" />
                </Button>
                </>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardRecipesID;
