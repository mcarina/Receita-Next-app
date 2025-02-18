'use client'
import { useState } from 'react'
import Link from 'next/link'
import { GiSpellBook } from "react-icons/gi";

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { CustomInput } from './CustomInput';
import { authFormSchema } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { signIn, signUp} from '@/lib/actions/user.actions'
import { ChefHat } from "lucide-react"


const AuthForm = ({ type }: { type: string }) => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const formSchema = authFormSchema(type);
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        
        try {
            if (type === 'sign-up') {
                const userData = {
                    firstName: data.firstName!,
                    lastName: data.lastName!,
                    address1: data.address1!,
                    city: data.city!,
                    state: data.state!,
                    postalCode: data.postalCode!,
                    dateOfBirth: data.dateOfBirth!,
                    ssn: data.ssn!,
                    email: data.email,
                    password: data.password,
                };
    
                const newUser = await signUp(userData); 
    
                if (newUser) {
                    setUser(newUser); // Armazena os dados do usuário
                    router.push('/'); 
                } else {
                    console.error('Erro ao criar o usuário');
                    // Exibir mensagem de erro para o usuário aqui
                }
            }
    
            // Lógica de login permanece a mesma
            if (type === 'sign-in') {
                const response = await signIn(data.email, data.password);
                
                if (response && response.token) {
                    setUser(response);
                    router.push('/');
                } else {
                    console.error('Erro ao fazer login');
                }
            }
        } catch (error) {
            console.log(error);
            // Exibir mensagem de erro para o usuário aqui
        } finally {
            setIsLoading(false);
        }
    };
    
    

return (
    <section className="auth-form">
        <header className="flex flex-col gap-5 md:gap-8">
            <Link href="/" className="flex items-center gap-2">
                <ChefHat className="w-8 h-8 text-black" />
                <h1 className="sidebar-logo">Recipe App</h1>
            </Link>

            <div className="flex flex-col gap-1 md:gap-3">
                <h2 className="text-24 lg:text-29 font-semibold text-gray-900">
                    {user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
                    <p className="text-16 font-normal text-gray-600"> {user ? "Link your account to get started" : "Please enter yout details"} </p>
                </h2>
            </div>
        </header>

        {user ? (
            <div className="flex flex-col gap-4">

            </div>
        ) : (

            <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
    
                {type === 'sign-up' && (
                    <>
                        <CustomInput control={form.control} name='firstName' label="Nome" placeholder='Seu Nome' />
                    </>
                )}

                    <CustomInput
                        control={form.control}
                        name="email"
                        label="Email"
                        placeholder="Digite seu Email" 
                    />
                    <CustomInput
                        control={form.control}
                        name="password"
                        label="Senha"
                        placeholder="Digite sua senha"
                        type="password" 
                    />
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <Loader2 size={20} className="animate-spin" />
                                &nbsp; Loading...
                            </>
                        ) : (
                            type === 'sign-in' ? 'Entre' : 'Cadastre-se'
                        )}
                    </Button>
                </form>
            </Form>

            <footer className="flex justify-center gap-1">
                <p className="text-14 font-normal text-gray-600">
                {type === 'sign-in' ? "Não possui conta?" : "Já tem cadastro?"}
                </p>

                <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="form-link">
                {type === 'sign-in' ? 'Cadastre-se ' : 'Sign in'}
                </Link>
            </footer>
            
            </>

        
        )}

    </section>
  )
}

export default AuthForm