'use client';
import { useSearchParams, useRouter } from "next/navigation";
import { cn, formUrlQuery } from "@/lib/utils";

export const RecipeTabItem = ({ category }: { category: string }) => {
    const searchParams = useSearchParams();
    const router = useRouter(); 
    const isActive = searchParams.get("id") === category;

    const handleChange = () => {
        const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: "id",
            value: category,
        });
        router.push(newUrl, { scroll: false });
    };

    return (
        <div
            onClick={handleChange}
            className={cn(`tab-item`, {
                "border-blue-600": isActive,
            })}
        >
            <p
                className={cn("text-16 line-clamp-1 flex-1 font-medium text-gray-500", {
                    "text-blue-600": isActive,
                })}
            >
                {category}
            </p>
        </div>
    );
};
