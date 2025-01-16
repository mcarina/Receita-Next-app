"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useRouter } from "next/navigation";

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
    <div className="p-4 border rounded-md shadow-md bg-white space-y-2">
        <p className="text-lg font-bold text-gray-900">{recipe.title}</p>
        <p className="text-sm text-gray-700">{recipe.description}</p>
        <p className="text-14 truncate">Publicado por: <strong>{recipe.user}</strong></p>

        <div>
            <Sheet>
                {/* <SheetTrigger>
                    <TiInputChecked className="size-[20px] max-xl:size-15" color="black" />
                </SheetTrigger> */}
                <SheetTrigger onClick={toggleIngredients} className="p-btn">
                    Preview
                </SheetTrigger>
                
                <SheetTrigger onClick={() => handleRedirect(recipe.id)} className="p-btn">
                    See all
                </SheetTrigger>

                <SheetContent className="w-full">
                    <SheetClose asChild>
                        <div className="p-5 rounded-md shadow-md bg-white space-y-3">
                            <p className="text-lg font-bold text-gray-900">{recipe.title}</p>
                            <p className="text-sm text-gray-700">{recipe.description}</p>

                            <p className="text-sm font-semibold text-gray-800">Ingredients:</p>
                            <ul className="list-disc list-inside text-sm text-gray-600">
                            {recipe.ingredients.map((ingredient, id) => (
                                <li key={id}>
                                    <span className="font-medium text-gray-800">{ingredient.name}</span>: {ingredient.amount}
                                </li>
                            ))}
                            </ul>
                    
                        <p className="text-sm text-gray-700">Modo de preparo: {recipe.preparation_method}</p>

                        </div>
                    </SheetClose>
                </SheetContent>

            </Sheet>
        </div>
    </div>
);
};

export default RecipeInfo;
