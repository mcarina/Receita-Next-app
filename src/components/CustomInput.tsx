import { authFormSchema } from '@/lib/utils';
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';

import { Control, FieldPath } from 'react-hook-form';
import { z } from "zod"

const formSchema = authFormSchema('sign-up');

interface CustomInput {
    control: Control<z.infer<typeof formSchema>>;
    name: FieldPath<z.infer<typeof formSchema>>;
    label: string;
    placeholder: string;     
}

export const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <div className="form-item">
                <FormLabel className="form-label">
                    {label}
                </FormLabel>
                <div className="flex w-full flex-col">
                    <FormControl>
                        <Input placeholder={placeholder} className="input-class" {...field} type={name === 'password' ? 'password' : 'text'}/>
                    </FormControl>
                    <FormMessage className="form-message mt-2" />
                </div>

            </div>

        )}
    />

)
}
