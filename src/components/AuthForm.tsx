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


const AuthForm = ({ type }: { type: string }) => {
    const [user, setUser] = useState(null);
    
    const form = useForm<z.infer<typeof authFormSchema>>({
        resolver: zodResolver(authFormSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    function onSubmit(values: z.infer<typeof authFormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

return (
    <section className="auth-form">
        <header className="flex flex-col gap-5 md:gap-8">
            <Link href="/" className="mb-12 cursor-pointer flex items-center gap-1">
                <GiSpellBook className="size-[30px] max-xl:size-15" color="black" />
                <h1 className="sidebar-logo">Recipe App</h1>
            </Link>

            <div className="flex flex-col gap-1 md:gap-3">
                <h2 className="text-24 lg:text-29 font-semibold text-gray-900">
                    {user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
                    <p className="text-16 font-normal text-gray-600"> {user ? "Faça seu login para iniciar" : "Please enter yout details"} </p>
                </h2>
            </div>
        </header>

        {user ? (
            <div className="flex flex-col gap-4">

            </div>
        ) : (

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                <CustomInput
                    control={form.control}
                    name="email"
                    label="Email"
                    placeholder="enter your Email" 
                />
                <CustomInput
                    control={form.control}
                    name="password"
                    label="Password"
                    placeholder="enter your password"
                    type="password" 
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>            
        )}

    </section>
  )
}

export default AuthForm