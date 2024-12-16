'use client';
import { useSearchParams, useRouter } from "next/navigation";
import { cn, formUrlQuery } from "@/lib/utils";

export const RecipeTabItem = ({ recipe }: RecipeTabItemProps ) => {

    const searchParams = useSearchParams();
    const router = useRouter(); 
    const isActive = searchParams.get("id") === String(recipe.id);

    const handleChange = () => {
        const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: "id",
            value: recipe?.id,
        });
        router.push(newUrl, { scroll: false });
        };

return (
    <div
        onClick={handleChange}
        className={cn(`banktab-item`, {
            "border-blue-600": isActive,
        })}
    >
        <p
        className={cn("text-16 line-clamp-1 flex-1 font-medium text-gray-500", {
            "text-blue-600": isActive,
        })}
        >
        {recipe.category}
        </p>
    </div>
    );
};