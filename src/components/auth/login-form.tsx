/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react'
import { Button as PrimaryButon } from '@/components/ui/button'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Spinner from '@/components/ui/spinner'
import { LoginSchema } from '@/validations/login'
import { authenticate } from '@/services/auth'
import { useRouter } from 'next/navigation'
import GoogleLoginButton from '../ui/google-login-button'
import Link from 'next/link'
import { routes } from '@/lib/config'

 
interface LoginFormProps {
  className ?: string
}

const LoginForm: React.FC<LoginFormProps> = ({ className = '' }) => {

  const router = useRouter()

  // 1. Define your form.
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
        
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    let res = await authenticate(values)
    console.log(res)
    if(res.success){
      router.push('/user/profil')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`${className} p-6`}>
        <header className=' space-y-2'>
          <h1 className=' text-3xl font-semibold'>Login to your account</h1>
          <p className=' text-sm'>
            <span>Don't have an account yet ? <Link href={routes.register} className=' text-blue-800'>Create an account</Link></span>
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

        <div className=' pt-8 space-y-10'>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className='col-span-2'>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input className='bg-gray-50' placeholder="exemple@gmail.com" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter you Email address on this fiels.
                  </FormDescription>
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
                  <FormDescription>
                    Enter you password. A good password must contain at least one capital letter, one special character (#,@,$,%,~, ...), one number and a total of eight characters.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <PrimaryButon size='lg' className=' space-x-4'>
            {form.formState.isSubmitting && <Spinner />}
            <span>Sign in</span>
          </PrimaryButon>
        </div>
      </form>
    </Form>
  )
};

export default LoginForm;
