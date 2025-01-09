import React from 'react'

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from './ui/button'

const MyRecipes = ({ recipe }: MyRecipesProps) => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {recipe.map((recipeItem) => (
          <Card key={recipeItem.id} className="flex flex-col h-full">
            <CardHeader className="flex-grow">
              <h2 className="text-18 font-bold truncate">{recipeItem.title}</h2>
              <p className="text-14 truncate">publicado por: <strong>{recipeItem.user}</strong></p>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>Imagem ou outro conteúdo aqui</p>
            </CardContent>
            <CardFooter>
              <Button>Ver mais...</Button>
            </CardFooter>
          </Card>            
        ))}
      </div> 
    </div>
  );
};

export default MyRecipes;
