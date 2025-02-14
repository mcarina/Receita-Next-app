"use client";

import Image from "next/image"
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users } from "lucide-react"

import { getRecipeID } from "@/lib/actions/recipe.actions";

export default function ReceitasID({ user }: FooterProps) {
  const params = useParams();
  const [receita, setReceita] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      const recipeData = await getRecipeID(params.id); 
        setReceita(recipeData);
        setLoading(false); // Finalizando o carregamento
    };
  fetchRecipe()}, [params.id]);

  if (loading) { return <div>Carregando...</div> }

  return (
    <main className="min-h-screen bg-[#FDF7F2]">
      <div className="relative h-[20vh] md:h-[30vh] md:w-[170vh]">
        <header>
          <Image src="/placeholder.svg?height=600&width=1200" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="max-w-4xl mx-auto">
              <h1>{receita.title}</h1>
              <p>{receita.description}</p>
              <div className="flex items-center gap-6 text-gray-500">
              <div className="flex items-center gap-2">
                  <Clock  className="h-5 w-5"  />
                  <span className="flex items-center"> {receita.time}{receita.type_time} </span>
              </div>
              <div className="flex items-center gap-3">
                  <Users  className="h-5 w-5"  />
                  <span className="flex items-center">{receita.porcoes}_porções</span>
              </div>
                </div>
            </div>
          </div>
        </header>
        </div>


        <div className="max-w-4xl mx-auto px-4 py-8"> 
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
          <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className='footer_name'>
                      <p className="text-xl font-bold text-gray-700">
                          {user?.name[0] ?? '?'}
                      </p>
                  </div>
                  <div>
                    <div className="font-semibold">John Doe</div>
                    <div className="text-sm text-gray-500">Publicado há 2 dias</div>
                  </div>
                </div>
              </CardContent>
            </Card>

              <div className="space-y-6">
              <section>
                  <h2 className="text-2xl font-bold mb-4">Ingredientes</h2>
                  <Card>
                    <CardContent className="p-4">
                    <ul className="space-y-2">
                    {receita.ingredients.map((ingredient) => (
                      <li className="flex items-center gap-2" key={ingredient.id}>- 
                        <span className="font-semibold">{ingredient.name}:</span> 
                        {ingredient.amount}</li>
                      ))}
                    </ul>
                    </CardContent>
                  </Card>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Modo de Preparo</h2>
                  <Card>
                    <CardContent className="p-4">
                      <ol className="space-y-4 list-decimal list-inside">
                        <li className="pl-2">{receita.preparation_method}</li>
                      </ol>
                    </CardContent>
                  </Card>
              </section>

              </div>
          </div>

          <div className="space-y-6">

            <div>
              <h3 className="font-semibold mb-3">Receitas Relacionadas</h3>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="flex gap-3 p-2">
                      <div className="relative w-20 h-20">
                        <Image
                          src="/placeholder.svg?height=80&width=80"
                          alt={`Receita ${i}`}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium line-clamp-1">Pudim de Leite</h4>
                        <p className="text-sm text-gray-500 line-clamp-2">O clássico pudim de leite condensado...</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

          </div>
          
        </div>

        </div>
      
    </main>
  );
}
