"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { formUrlQuery } from "@/lib/utils";

const RecipeInfo = ({ recipe }: RecipeInfoProps) => {
    const router = useRouter();
    const [showIngredients, setShowIngredients] = useState(false);

    const handleChange = () => {
        const newUrl = formUrlQuery({
            params: new URLSearchParams(window.location.search).toString(),
            key: "id",
            value: recipe?.id ?? "", 
        });
        router.push(newUrl, { scroll: false });
        };
    
    
    const toggleIngredients = () => {
        setShowIngredients(prevState => !prevState);
    };

return (
    <div onClick={handleChange}  className="p-4 border rounded-md shadow-md bg-white space-y-2">
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
