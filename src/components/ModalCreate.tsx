'use client';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";

import { useState } from 'react';
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { createRecipe } from "@/lib/actions/recipe.actions";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import { Plus, Trash2 } from "lucide-react"

import InputCreateRecipeForm from "./InputCreateRecipeForm";
import ImagemUpload from "./ImagemUpload";

const ModalCreate = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

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

    const onSubmit = async (data: any, status: string) => {
        setIsLoading(true);
        setMessage(null);
    
        try {
            const response = await createRecipe({ ...data, status });
    
            if (response?.error) {
                setMessage(response.error);
                return;
            }
            setMessage("Receita criada com sucesso!");
            form.reset();
        } catch (error) {
            setMessage("Falha ao criar receita.");
        } finally {
            setIsLoading(false);
        }
    };
    
    
    return (
    <Form {...form}>
        <Dialog>
            <DialogTrigger className="flex gap-2">Criar Receitas</DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Criar nova receita?</DialogTitle>
                    <DialogDescription>
                        Crie sua própria receita passo a passo, preenchendo os campos abaixo:
                    </DialogDescription>
                </DialogHeader>

                {message && (
                    <div className="message">
                        <p className={message.includes("sucesso") ? "text-green-500" : "text-red-500"}>
                            {message}
                        </p>
                    </div>
                )}

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    <InputCreateRecipeForm control={form.control} name="title" label="Título" placeholder="Bolo de Morango com glacer" />

                    <InputCreateRecipeForm control={form.control} name="description" label="Descrição" placeholder="Receita deliciosa de bolo de morango" />

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
                    
                    <InputCreateRecipeForm control={form.control} 
                        name="preparation_method" 
                        label="Modo de Preparo" 
                        placeholder="Modo de Preparo" 
                        type="textarea" 
                        className="h-20" 
                    />

                    <div className="grid md:grid-cols-3 gap-2">

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
                                    { value: "hrs", label: "horas" },
                                    { value: "min", label: "minutos" },

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


                    <ImagemUpload/>

                    <div className="flex justify-end gap-2 pt-4 border-t">
                        <DialogFooter>
                            <Button 
                                type="button" 
                                disabled={isLoading} 
                                variant="outline" 
                                className="bg-yellow-50 hover:bg-yellow-200"
                                onClick={() => onSubmit(form.getValues(), "inativo")}
                            >
                                Salvar Rascunho
                            </Button>
                            <Button 
                                type="button" 
                                disabled={isLoading} 
                                className="bg-[#0D6EFD]"
                                onClick={() => onSubmit(form.getValues(), "ativo")}
                            >
                                {isLoading ? "Enviando..." : "Enviar"}
                            </Button>
                        </DialogFooter>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    </Form>
    );
};

export default ModalCreate;
