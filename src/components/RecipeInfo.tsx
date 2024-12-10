"use client";

import { useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose, 
} from "@/components/ui/sheet"

const RecipeInfo = ({ recipe }: RecipeInfoProps) => {
    const [showIngredients, setShowIngredients] = useState(false);
    
    const toggleIngredients = () => {
        setShowIngredients(prevState => !prevState);
    };

return (
    <div className="p-4 border rounded-md shadow-md bg-white space-y-2">
        <p className="text-lg font-bold text-gray-900">{recipe.title}</p>
        <p className="text-sm text-gray-700">{recipe.description}</p>

        <div>
            <Sheet>
                <SheetTrigger onClick={toggleIngredients} className="p-btn">
                    {showIngredients ? "See less" : "See more"}
                </SheetTrigger>
                <SheetContent className="w-full">
                    <SheetClose asChild>
                        <div className="p-5 border rounded-md shadow-md bg-white space-y-2">
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
                        </div>
                    </SheetClose>
                </SheetContent>
            </Sheet>
        </div>
    </div>
);
};

export default RecipeInfo;
