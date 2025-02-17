'use client'
import { useState, useEffect } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useParams } from "next/navigation";
import { Form } from "@/components/ui/form";
import { ArrowLeft, Save, Trash2, Plus } from "lucide-react"

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

import { getRecipeID } from "@/lib/actions/recipe.actions";
import { TabItemEdit } from "./_componet/TabItemEdit";
import ImagemUpload from "@/components/ImagemUpload";
import InputCreateRecipeForm from "@/components/InputCreateRecipeForm";

function page() {
    const params = useParams();
    const [receita, setReceita] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const form = useForm({
        defaultValues: {
            title: "",
            description: "",
            preparation_method: "",
            category_id: "",
            time: "", 
            type_time: "", 
            porcoes: "", 
            status: "",
            ingredients: [{ name: "", amount: "" }],
        },
    });

    const { fields, append, remove } = useFieldArray({ control: form.control, name: "ingredients"});
    
    useEffect(() => {
        const fetchRecipe = async () => {
            const recipeData = await getRecipeID(params.id); 
            setReceita(recipeData);
            setLoading(false);
        };
    fetchRecipe()}, [params.id]);

if (loading) { return <div>Carregando...</div> }


return (
    <Form {...form}>

        <div className="min-h-screen pb-12 md:w-[170vh]">
                
            <div className="bg-white border-b sticky top-0 z-10">
                <div className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Voltar
                    </Button>
                    <h1 className="text-xl font-semibold">Editando: {receita.title}</h1>
                    </div>

                    <div className="flex items-center gap-2">
                    <Button className="bg-[#0D6EFD]" size="sm">
                        <Save className="mr-2 h-4 w-4" />
                        Salvar Alterações
                    </Button>
                    </div>
                </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                <Tabs defaultValue="basic" className="m-2 space-y-6">
                    
                    <TabItemEdit/>

                    <TabsContent value="basic" className="space-y-6">
                        {/* Basic Info */}
                        <Card>
                        <CardHeader>
                            <CardTitle>Informações da Receita</CardTitle>
                            <CardDescription>Edite as informações básicas da sua receita</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Label htmlFor="title">Nome da Receita</Label>
                                <Input id="title" defaultValue={receita.title} />
                            </div>
                            <div>
                                <Label htmlFor="description">Descrição</Label>
                                <Input id="description" defaultValue={receita.description}/>
                            </div>

                            <div className="grid md:grid-cols-3 gap-3">

                                <InputCreateRecipeForm 
                                    control={form.control} 
                                    name="category_id" 
                                    label="Categoria"
                                    type="select"
                                    placeholder="Selecione"
                                    options={[
                                        { value: "1", label: "breakfast" },
                                        { value: "2", label: "Lunch" }, 
                                        { value: "3", label: "Dinner" },
                                    ]}
                                    className=""
                                />
                                <div className="flex gap-3">
                                    <InputCreateRecipeForm 
                                        control={form.control} 
                                        name="time" 
                                        label="Tempo"
                                        placeholder="30"
                                        className="w-20"
                                    />

                                    <InputCreateRecipeForm 
                                        control={form.control} 
                                        name="type_time" 
                                        label="hrs/min"
                                        type="select"
                                        placeholder="Selecione um tempo"
                                        options={[
                                            { value: "horas", label: "horas" },
                                            { value: "minutos", label: "minutos" },

                                        ]}
                                        className="w-20"
                                    />

                                    <InputCreateRecipeForm 
                                        control={form.control} 
                                        name="porcoes" 
                                        label="Porções"
                                        placeholder="4"
                                        className="w-20"
                                    />

                                </div>

                            </div>
                        </CardContent>
                        </Card>

                        {/* Image Upload */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Imagem da Receita</CardTitle>
                                <CardDescription>Atualize a foto principal da sua receita</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ImagemUpload/>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="ingredients" className="space-y-6">
                        <Card>
                        <CardHeader>
                            <CardTitle>Ingredientes</CardTitle>
                            <CardDescription>Gerencie a lista de ingredientes da sua receita</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {fields.map((field, index) => (
                            <div key={field.id || `ingredient-${index}`} className="flex gap-2 items-center">
                                <Controller name={`ingredients.${index}.name`} control={form.control} 
                                    render={({ field }) => (
                                        <Input placeholder={`Ingrediente ${index + 1}`} className="col-span-3" {...field}/>
                                    )}
                                />
                                <Controller name={`ingredients.${index}.amount`} control={form.control}
                                    render={({ field }) => (
                                        <Input placeholder="Quantidade" className="col-span-3" {...field}/>
                                    )}
                                />
                                
                                <Button type="button" variant="outline" size="icon" onClick={() => remove(index)}>
                                    <Trash2 className="h-4 w-4 m-4"/>      
                                </Button>
                            </div>
                            ))}
                            <Button type="button" variant="outline" size="sm" onClick={() => append({ name: "", amount: "" })}>
                                <Plus className="h-4 w-4 mr-2" /> Adicionar ingredientes
                            </Button>
                        </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="instructions" className="space-y-6">
                        <Card>
                        <CardHeader>
                            <CardTitle>Modo de Preparo</CardTitle>
                            <CardDescription>Edite o passo a passo da sua receita</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <InputCreateRecipeForm control={form.control} 
                                name="preparation_method" 
                                label="Modo de Preparo" 
                                placeholder="Modo de Preparo" 
                                type="textarea" 
                                className="h-40" 
                            />
                        </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>


                </div>

            </div>

        </div>

    </Form>
)
}

export default page