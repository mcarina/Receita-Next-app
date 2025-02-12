"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import Image from "next/image"
import { Clock, Users } from "lucide-react"

const RecipeInfo = ({ recipe }: RecipeInfoProps) => {
    const [showIngredients, setShowIngredients] = useState(false);
    const router = useRouter();
    
    const toggleIngredients = () => {
        setShowIngredients(prevState => !prevState);
    };

    const handleRedirect = (id:string) => {
        router.push(`recipes/${id}`);
    };

return (
    <section >
        <div className="p-4 border rounded-md shadow-md bg-white space-y-2 ">
            <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=400" alt="img" fill className="object-cover" />
            </div>
            
            <div className="space-y-2">
                <h2 className="text-lg font-bold text-gray-900">{recipe.title}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    45 min
                  </span>
                  <span className="flex items-center">
                    <Users className="mr-1 h-4 w-4" />
                    6 porções
                  </span>
                </div>
                <p className="text-gray-600">{recipe.description}</p>
            </div>

            <div>
                <Sheet>

                    <div className="flex gap-2 mt-4">
                        <SheetTrigger onClick={toggleIngredients} className="p-btn2">
                            Preview
                        </SheetTrigger>
                        
                        <SheetTrigger onClick={() => handleRedirect(recipe.id)} className="p-btn2">
                            See all
                        </SheetTrigger>
                    </div>

                    <SheetContent className="w-full">
                        <SheetClose asChild>
                            <div className="p-5 rounded-md space-y-3">
                                <h2 className="text-20 font-bold text-gray-900">{recipe.title}</h2>
                                <p className="text-gray-600">{recipe.description}</p>

                                <p className="font-semibold mb-2">Ingredients:</p>
                                <ul className="list-disc list-inside text-sm text-gray-600">
                                {recipe.ingredients.map((ingredient, id) => (
                                    <li key={id}>
                                        <span className="font-medium text-gray-800">{ingredient.name}</span>: {ingredient.amount}
                                    </li>
                                ))}
                                </ul>
                        
                                <h2 className="font-semibold mb-2">Modo de preparo:</h2>
                                <p className="text-gray-600">{recipe.preparation_method}</p>
                            </div>
                        </SheetClose>
                    </SheetContent>

                </Sheet>
            </div>
        </div>

    </section>
);
};

export default RecipeInfo;
