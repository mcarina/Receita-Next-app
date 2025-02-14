"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import Image from "next/image"
import { Clock, Users } from "lucide-react"

const RecipeInfo = ({ recipe }: RecipeProps) => {
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
        <div className="card-border">
            <div className="relative h-48">
                <Image src="/placeholder.svg?height=200&width=400" alt="img" fill className="object-cover" />
            </div>
            
            <div className="space-y-2">
                <h2>{recipe.title}</h2>
                <div className="card-subtext">
                    <span className="flex items-center">
                        <Clock className="icons-lucide" />
                        {recipe.time}{recipe.typeTime}
                    </span>
                    <span className="flex items-center">
                        <Users className="icons-lucide" />
                        {recipe.porcoes} porções
                    </span>
                </div>
                <p>{recipe.description.length > 50 ? recipe.description.slice(0, 50) + '...' : recipe.description}</p>
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
