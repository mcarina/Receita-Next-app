import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import InputCreateRecipeForm from "./InputCreateRecipeForm";

const ModalCreate = () => {

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

        <div className="grid gap-4 py-4">

            <InputCreateRecipeForm id="title" label="Title" />

            <InputCreateRecipeForm id="description" label="Description"/>

            <InputCreateRecipeForm id="ingredients" label="Ingredients"/>

            <InputCreateRecipeForm 
                id="modo-preparo" 
                label="Modo de Preparo" 
                type="textarea"
                className="h-52" 
            />

            <InputCreateRecipeForm id="img" label="Add Imagem"/>
            
        </div>

        <DialogFooter>
            <Button type="submit">Enviar</Button>
        </DialogFooter>
        </DialogContent>
    </Dialog>
    );
};

export default ModalCreate;
