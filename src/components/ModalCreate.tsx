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
import ModalSmDetalhes from "./ModalSmDetalhes";
import ImagemUpload from "./ImagemUpload";

const ModalCreate = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const form = useForm({
        defaultValues: {
            title: "",
            description: "",
            preparation_method: "",
            category_id: "1",
            ingredients: [{ name: "", amount: "" }],
        },
    });

    const { fields, append, remove } = useFieldArray({ control: form.control, name: "ingredients"});

    const onSubmit = async (data: any) => {
        setIsLoading(true);
        setMessage(null);
        try {
            const response = await createRecipe(data);
    
            if (response?.error) {setMessage(response.error);
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

                    <ModalSmDetalhes/>

                    <ImagemUpload/>

                    <div className="flex justify-end gap-2 pt-4 border-t">
                        <DialogFooter>
                            <Button variant="outline" className="bg-yellow-50 hover:bg-yellow-200">
                            Salvar Rascunho
                            </Button>
                            <Button type="submit" disabled={isLoading} className="bg-[#0D6EFD]">
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
