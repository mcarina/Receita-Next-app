import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export const RecipeTabItem = ({ category }: { category: string }) => {
    return (
        <div>
            <TabsList className="w-full">
                <TabsTrigger value={category}>{category}</TabsTrigger>
            </TabsList>
        </div>
    );
};
