'use client';
import { useSearchParams, useRouter } from "next/navigation";
import { cn, formUrlQuery } from "@/lib/utils";

export const RecipeTabItem = () => {

    const searchParams = useSearchParams();
    const router = useRouter();
    
    const mockAccount = {
        id: "1",
        name: "Receita de Panquecas",
        appwriteItemId: "recipe-1"
    };

    const appwriteItemId = "recipe-1";
    
    const isActive = appwriteItemId === mockAccount.appwriteItemId;

    const handleRecipeChange = () => {
        const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: "id",
            value: mockAccount.appwriteItemId,
        });
        router.push(newUrl, { scroll: false });
    };

  return (
    <div
    onClick={handleRecipeChange}
    className={cn("recipe-tab-item", {
        "border-blue-600": isActive,
    })}
>
    <p className={cn("text-16 line-clamp-1 flex-1 font-medium text-gray-500", {
        "text-blue-600": isActive,
    })}>
        {mockAccount.name}
    </p>
</div>
  )
}
