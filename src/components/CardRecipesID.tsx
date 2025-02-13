"use client"
import Image from "next/image"
import { useState } from 'react';
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Clock, Users, Eye, Trash2, Edit3 } from "lucide-react"
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

import { destroyRecipeID } from "@/lib/actions/recipe.actions";
import ModalCreate from "./ModalCreate";

const CardRecipesID = ({ recipe, type }: CardRecipesIDProps) => {
  const router = useRouter();
  const [recipes, setRecipes] = useState(recipe); 

  const handleRedirect = (id: string) => {
    router.push(`recipes/${id}`);
  };

  const handleDelete = async (id:string) => {
    const confirmDelete = window.confirm("Tem certeza de que deseja deletar esta receita?");
    if (!confirmDelete) return;
    
    await destroyRecipeID(id);
    setRecipes((prev) => prev.filter((item) => item.id !== id));
    alert("receita deletada com sucesso")
  }

  return (
    <div className="home-content">
        <div className="flex items-center justify-between gap-4 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex gap-4 p-btn1">
              <ModalCreate/>
          </div>
        </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipe.map((recipeItem) => (
          <Card key={recipeItem.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                {/* <div className="absolute top-2 right-2 z-10 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Publicada
                </div> */}
                <Image src="/placeholder.svg?height=200&width=400" alt="Recipe 1" fill className="object-cover" />
            </div>

            <CardHeader className="flex-grow">
              <h2 className="text-lg font-bold text-gray-900">{recipeItem.title}</h2>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  45 min
                </span>
                <span className="flex items-center">
                  <Users className="mr-1 h-4 w-4" />
                  6 porções
                </span>
                
                {type === "recipes" && (
                  <span className="flex items-center">
                    <Eye className="mr-1 h-4 w-4" />
                    1k
                  </span>
                )}

              </div>
              <p className="text-gray-600 line-clamp-2">Imagem ou outro conteúdo aqui</p>
            </CardHeader>


            <CardFooter className="gap-1">
              <Button variant="outline" size="sm" className="flex-1" onClick={() => handleRedirect(recipeItem.id)}>
                <Eye className="w-4 h-4 mr-2" />
                Ver mais...
                </Button>

                <Button variant="outline" size="sm">
                <Edit3 className="w-4 h-4" />
              </Button>

              {type === "recipes" && (
                <Button onClick={() => handleDelete(recipeItem.id)} variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardRecipesID;
