import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"
import qs from "query-string";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const authFormSchema = (type: string) => z.object({
  // sign up
  firstName: type === 'sign-in' ? z.string().optional() : z.string().min(3),
  name: type === 'sign-in' ? z.string().optional() : z.string().min(3),
  lastName: type === 'sign-in' ? z.string().optional() : z.string().min(3),
  address1: type === 'sign-in' ? z.string().optional() : z.string().max(50),
  city: type === 'sign-in' ? z.string().optional() : z.string().max(50),
  state: type === 'sign-in' ? z.string().optional() : z.string().min(2).max(2),
  postalCode: type === 'sign-in' ? z.string().optional() : z.string().max(8),
  dateOfBirth: type === 'sign-in' ? z.string().optional() : z.string().min(3),
  cpf: type === 'sign-in' ? z.string().optional() : z.string().max(11),
  //
  email: z.string().email(),
  password: z.string().min(4),
})

export const recipeSchema = z.object({
  title: z.string().min(1, "O título é obrigatório"),
  description: z.string().min(1, "A descrição é obrigatória"),
  preparation_method: z.string().min(1, "O modo de preparo é obrigatório"),
  category_id: z.string().min(1, "A categoria é obrigatória"),
  ingredients: z.array(
    z.object({
      name: z.string().min(1, "O nome do ingrediente é obrigatório"),
      amount: z.string().min(1, "A quantidade é obrigatória"),
    })
  ).nonempty("Adicione ao menos um ingrediente"),
});

interface UrlQueryParams {
  params: string;
  key: string;
  value: string;
}

export function formUrlQuery({ params, key, value }: UrlQueryParams) {
  const currentUrl = qs.parse(params);

  currentUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
}

