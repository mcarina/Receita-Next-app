'use client';
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import InputCreateRecipeForm from "./InputCreateRecipeForm";
import { postRecipe } from "@/lib/actions/recipe.actions";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { recipeSchema } from '@/lib/utils';

const ModalCreate = ({ type }: { type: string })  => {

    const [isLoading, setIsLoading] = useState(false);

    // const RecipeFormData = recipeSchema(type);

    const form = useForm<z.infer<typeof recipeSchema>>({
        resolver: zodResolver(recipeSchema),
        defaultValues: {
            title: "",
            description: "",
            preparation_method: "",
            category_id: "1",
            ingredients: [{ name: "", amount: "" }],
        },
    });
    

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: "ingredients",
      });
    

    const onSubmit = async (data: z.infer<typeof recipeSchema>) => {
        setIsLoading(true);
    
        try {
            const response = await postRecipe(data);
            console.log("Receita criada com sucesso:", response);
            alert("Receita criada com sucesso!");
          form.reset(); // Reseta o formulário após o envio
        } catch (error) {
            console.error("Erro ao criar receita:", error);
            alert("Falha ao criar receita.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
    <Dialog>
        <DialogTrigger className="flex gap-2">Criar Receitas</DialogTrigger>

        <DialogContent>
        <DialogHeader>
            <DialogTitle>Criar nova receita?</DialogTitle>
            <DialogDescription>
            Crie sua propria receita passo a passo, preenchendo os campos abaixo:
            </DialogDescription>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">

            <InputCreateRecipeForm id="title" label="Title" {...form.register("title")} />

            <InputCreateRecipeForm id="description" label="Description" {...form.register("description")}/>

            <InputCreateRecipeForm id="preparation_method" label="Modo de Preparo" type="textarea" className="h-52" {...form.register("preparation_method")}/>

            {fields.map((field, index) => (
            <div key={field.id} className="flex gap-2 items-center">
                <InputCreateRecipeForm
                id={`ingredient-name-${index}`}
                label={`Ingrediente ${index + 1}`}
                {...form.register(`ingredients.${index}.name`)}
                />
                <InputCreateRecipeForm
                id={`ingredient-amount-${index}`}
                label="Quantidade"
                {...form.register(`ingredients.${index}.amount`)}
                />
                <Button
                type="button"
                variant="destructive"
                onClick={() => remove(index)}
                >
                Remover
                </Button>
            </div>
            ))}

            <Button type="button" onClick={() => append({ name: "", amount: "" })}>
            Adicionar Ingrediente
            </Button>

            <DialogFooter>
            <Button type="submit" disabled={isLoading}>
                {isLoading ? "Enviando..." : "Enviar"}
            </Button>
            </DialogFooter>
        </form>
        </DialogContent>
    </Dialog>
  );
};

export default ModalCreate;
