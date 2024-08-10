"use client"

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import CustomInput from './CustomInput'
import { authFormSchema } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'
 

type Props = {
    type : string
}

const AuthForm = ({type}: Props) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const 

    const form = useForm<z.infer<typeof authFormSchema>>({
        resolver: zodResolver(authFormSchema),
        defaultValues: {
            email : "",
            password : "",
            firstName : "",
            lastName : "",
            address : "",
            dateOfBirth : "",
            ssn : ""
        },
    })
     
    function onSubmit(values: z.infer<typeof authFormSchema>) {
        
        setIsLoading(true)
        console.log("submitted values:", values)
        new Promise((resolve)=>{
            console.log("is loading :", isLoading)
            setTimeout(() => {
                router.push("/")
            }, 5000);
        })
        setIsLoading(false)
    }

   

  return (
    <section className='auth-form'>
        <header className='flex flex-col gap-5 md:gap-8'>
            <Link href="/" className="cursor-pointer flex items-center gap-1 px-4">
                <Image 
                src="/icons/logo.svg"
                width={34}
                height={34}
                alt="Horizon logo"
                />
                <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
            </Link>

            <div className='flex flex-col gap-1 md:gap-3'>
                <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                    {user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
                </h1>

                <p className='text-16 font-normal text-gray-600'>
                    {user ? 'Link your account to get started' : "Please enter your details"}
                </p>
            </div>
        </header>

        {user ? (
            <div className='flex flex-col gap-4'>
                {/* PlaidLink */}
            </div>
        ) : (
            <>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        {type === "sign-up" && (
                            <>
                                <CustomInput
                                    control={form.control}
                                    label='First Name'
                                    name='firstName'
                                    placeholder='Enter your first name'
                                />
                                <CustomInput
                                    control={form.control}
                                    label='Last Name'
                                    name='lastName'
                                    placeholder='Enter your last name'
                                />
                                <CustomInput
                                    control={form.control}
                                    label='Address'
                                    name='address'
                                    placeholder='Enter your specific address'
                                />  
                                <CustomInput
                                    control={form.control}
                                    label='State'
                                    name='state'
                                    placeholder='Example: NY'
                                />  
                                <CustomInput
                                    control={form.control}
                                    label='Postal Code'
                                    name='postalCode'
                                    placeholder='Example: 1101'
                                />  
                                <CustomInput
                                    control={form.control}
                                    label='Date of birth'
                                    name='dateOfBirth'
                                    placeholder='YYYY-MM-DD'
                                />  
                                <CustomInput
                                    control={form.control}
                                    label='SSN'
                                    name='ssn'
                                    placeholder='Example: 1234'
                                />  
                            </>
                        )}

                        <CustomInput
                            control={form.control}
                            name='email'
                            label='Email'
                            placeholder='Enter your email'
                        />

                        <CustomInput
                            control={form.control}
                            name='password'
                            label='Password'
                            placeholder='Enter your password'
                        />

                        <div className='flex flex-col gap-4'>
                            <Button 
                                type="submit" 
                                className='form-btn'
                                disabled={isLoading}
                            >{isLoading ? (
                                <>
                                    <Loader2 size={20} className='animate-spin'/>&nbsp;
                                    Loading...
                                </>
                            ) : type === "sign-in" ? "Sign In" : "Sign Up"}</Button>
                        </div>
                    </form>
                </Form>

                <footer className='flex justify-center gap-1'>
                    <p className='text-14 font-normal text-gray-600'>
                        {type === "sign-in" ? "don't have an account?" : "Already have an account?"} {" "}
                        <Link 
                            href={type === "sign-in" ? "/sign-up" : "/sign-in"}
                            className='form-link'
                        >{type === "sign-in" ? "sign up" : "sign in"}</Link>
                    </p>
                </footer>
            </>
        )}
    </section>
  )
}

export default AuthForm