import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RecipeTabItem } from './RecipeTabItem';

const Recipes = () => {

    const accounts = [
        { id: "1", name: "Receita de Panquecas", appwriteItemId: "recipe-1" },
        { id: "2", name: "Receita de Bolo de Chocolate", appwriteItemId: "recipe-2" },
        // Adicione mais contas se necessário
      ];

      const appwriteItemId = "recipe-1";

  return (
    <section className="recent-transactions">
        <header className="flex items-center justify-between">
            <h2 className="recent-transactions-label">
                Lista de receitas
            </h2>
            <Link href={`/recipes/id`} className="view-all-btn">
                ver todos
            </Link>
        </header>

        <Tabs defaultValue={appwriteItemId} className="w-full">
        <TabsList className="recent-transactions-tablist">
          {accounts.map((account) => (
            <TabsTrigger key={account.id} value={account.appwriteItemId}>
              <RecipeTabItem
                account={account}
                appwriteItemId={appwriteItemId}
              />
            </TabsTrigger>
          ))}
        </TabsList>

            <TabsContent className="space-y-4"/>
        </Tabs>
    </section>
  )
}

export default Recipes