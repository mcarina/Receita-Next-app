"use client";

import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import Image from "next/image"
import { Clock, Users, Bookmark, BookmarkCheck  } from "lucide-react"

import { getSavedRecipe } from "@/lib/actions/saved.actions";
import { saveRecipe } from "@/lib/actions/saved.actions";

const RecipeInfo = ({ recipe }: RecipeProps) => {
    const [isSaved, setIsSaved] = useState(false);
    const [showIngredients, setShowIngredients] = useState(false);
    const router = useRouter();

    
    const toggleIngredients = () => {
        setShowIngredients(prevState => !prevState);
    };

    const handleRedirect = (id:string) => {
        router.push(`recipes/${id}`);
    };

    const handleSaveRecipe = async () => {
        try {
            setIsSaved(!isSaved);
            alert(isSaved ? "Receita removida dos favoritos" : "Receita salva!");
        } catch (error) {
            console.error("Erro ao salvar receita:", error);
        }
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
                        
                        <button className="p-btn2"  onClick={handleSaveRecipe}>
                            {isSaved ? (
                                <BookmarkCheck className="h-5 w-5 text-green-500" />
                            ) : (
                                <Bookmark className="h-5 w-5" />
                            )}
                        </button>
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
                                <p className="text-gray-600">{recipe.preparationMethod}</p>
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
