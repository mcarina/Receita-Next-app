import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

const InputCreateRecipeForm = ({ control, name, label, placeholder, type = "text", className }: InputCreateRecipeForm) => {
    return (
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor={name} className="text-right">
                {label}
            </Label>
            {type === "textarea" ? (
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <Textarea
                            id={name}
                            placeholder={placeholder}
                            className={`col-span-3 resize-none ${className}`}
                            {...field}
                        />
                    )}
                />
            ) : (
                <Controller
                    name={name}
                    control={control}
                    render={({ field }) => (
                        <Input
                            id={name}
                            placeholder={placeholder}
                            className={`col-span-3 ${className}`}
                            {...field}
                        />
                    )}
                />
            )}
        </div>
    );
};

export default InputCreateRecipeForm;
