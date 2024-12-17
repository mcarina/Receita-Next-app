import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";


const InputCreateRecipeForm = ({ id, label, value, type = "text", onChange, className  }: InputCreateRecipeForm) => {
    return (
        <div className="grid grid-cols-4 items-center gap-4">

            <Label htmlFor={id} className="text-right"> {label} </Label>
            
            {type === "textarea" ? (
                <Textarea id={id} className={`col-span-3 resize-none ${className}`} />
            ) : (            
                <Input
                    id={id}
                    value={value}
                    onChange={onChange}
                    className={`col-span-3 ${className}`}
                />
            )}
        </div>
        );
}

export default InputCreateRecipeForm