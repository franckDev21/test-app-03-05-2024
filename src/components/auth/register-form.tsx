'use client'

import React from 'react'
import { Button as PrimaryButon } from '@/components/ui/button'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RegisterSchema } from '@/validations/register'
import { useRouter } from 'next/navigation'
import { createAccount } from '@/services/auth'
import Spinner from '@/components/ui/spinner'
import Link from 'next/link'
import { routes } from '@/lib/config'
import GoogleLoginButton from '@/components/ui/google-login-button'


interface RegisterFormProps {
  className ?: string
}

const RegisterForm: React.FC<RegisterFormProps> = ({ className = '' }) => {

  const router = useRouter()

  // 1. Define your form.
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      lastname: "",
      firstname: "",
      confirm_password: "",
      phone_number: ""
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    let res = await createAccount(values)
    console.log(res)
    if(res.success){
      router.push('/user/profil')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`${className} p-6`}>
        <header className=' space-y-2'>
          <h1 className=' text-3xl font-semibold'>Create you account</h1>
          <p className=' text-sm'>
            <span>Already have an account ? <Link href={routes.login} className=' text-blue-800'>Login</Link></span>
          </p>

          <div className=' py-4'>
            <GoogleLoginButton />
          </div>
          <div className=' 
            flex justify-between items-center after:inline-block after:w-[45%] after:bg-gray-200 after:h-[1.2px] 
            before:inline-block before:w-[45%] before:bg-gray-200 before:h-[1.2px] text-sm
            '>
            Or
          </div>
        </header>

        <div className=' pt-8 space-y-4'>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input className='bg-gray-50' placeholder="Enter you firstname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input className='bg-gray-50' placeholder="Enter you lastname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />  
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input className='bg-gray-50' placeholder="exemple@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone number</FormLabel>
                  <FormControl>
                    <Input className='bg-gray-50' placeholder="(+...) ....." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type='password' className='bg-gray-50' placeholder="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirm_password"
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <FormLabel>Confirmation password</FormLabel>
                  <FormControl>
                    <Input type='password' className='bg-gray-50' placeholder="Corfirm password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <PrimaryButon size='lg' className=' space-x-4'>
            {form.formState.isSubmitting && <Spinner />}
            <span>Create account</span>
          </PrimaryButon>
        </div>
      </form>
    </Form>
  )
}

export default RegisterForm
