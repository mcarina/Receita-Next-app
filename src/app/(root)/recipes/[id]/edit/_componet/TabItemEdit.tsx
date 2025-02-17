import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export const TabItemEdit = () => {
  return (
    <div>
        <TabsList className="w-full">
            <TabsTrigger value="basic">Informações Básicas</TabsTrigger>
            <TabsTrigger value="ingredients">Ingredientes</TabsTrigger>
            <TabsTrigger value="instructions">Modo de Preparo</TabsTrigger>
        </TabsList>
    </div>
  )
}
