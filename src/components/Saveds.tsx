"use client"
import React from 'react'
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from './ui/button'

const Saveds = ({ recipe }: MyRecipesProps) => {
  const router = useRouter();

  const handleRedirect = (id:string) => {
    router.push(`recipes/${id}`);
};

  return (
    <div className="p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* {recipe.map((recipeItem) => ( */}
        <Card 
        //   key={recipeItem.id} 
            className="flex flex-col w-[350px]">
            <CardHeader className="flex-grow">
                <h2 className="text-18 font-bold truncate">titulo</h2>
                <p className="text-14 truncate">publicado por: <strong>usuario</strong></p>
            </CardHeader>
            <CardContent className="flex-grow">
                <p>Imagem ou outro conteúdo aqui</p>
            </CardContent>

            <CardFooter className="gap-1">
                <Button className="pr" onClick={() => handleRedirect(1)}>Ver mais...</Button>
            </CardFooter>
        </Card>            
        {/* ))} */}
        </div> 
    </div>
);
};

export default Saveds;