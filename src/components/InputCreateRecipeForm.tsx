import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const InputCreateRecipeForm = ({ control, name, label, placeholder, type = "text", options = [], className }: InputCreateRecipeForm) => {
    return (
        <div className="space-y-4">
            <div>
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
                ) : type === "select" ? (
                    <Controller
                        name={name}
                        control={control}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger className={`col-span-3 ${className}`}>
                                    <SelectValue placeholder={placeholder} />
                                </SelectTrigger>
                                <SelectContent>
                                    {options.map((option, index) => (
                                        <SelectItem key={index} value={option.value}>
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
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
        </div>
    );
};

export default InputCreateRecipeForm;
