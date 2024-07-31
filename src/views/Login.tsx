'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { z } from 'zod';
import { AuthHeader } from '~/components/AuthHeader';
import SocialButton from '~/components/SocialButton';
import { Button } from '~/components/ui/button';
import { Checkbox } from '~/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import Link from '~/components/ui/link';
import { cn } from '~/lib/utils';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  remember: z.boolean(),
});
type FormData = z.infer<typeof formSchema>;

const defaultValues: FormData = {
  email: '',
  password: '',
  remember: false,
};

const Login = () => {
  const form = useForm<FormData>({
    defaultValues,
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async data => {
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    console.log(res);
  };

  return (
    <>
      <AuthHeader title={'Acesse sua conta'} subtitle={'Faça login para continuar'} />
      <div className='mt-10'>
        <Form {...form}>
          <form className='space-y-2' onSubmit={form.handleSubmit(onSubmit)}>
            <div className='mb-4 grid grid-cols-1 gap-2'>
              <SocialButton onClick={() => signIn('google')} icon={FcGoogle} label='Entrar com o Google' />
            </div>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-300'></div>
              </div>
              <div className='relative flex justify-center text-sm font-medium leading-6'>
                <span className='bg-white px-6 uppercase'>{'ou'}</span>
              </div>
            </div>

            <div>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input type='email' placeholder='cliente@lailla.io' {...field} className={cn({ '!border-destructive': form.formState.errors[field.name] })} />
                    </FormControl>
                    <FormMessage>&nbsp;</FormMessage>
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input type='password' placeholder={'•'.repeat(8)} {...field} className={cn({ '!border-destructive': form.formState.errors[field.name] })} />
                    </FormControl>
                    <FormMessage>&nbsp;</FormMessage>
                  </FormItem>
                )}
              />
            </div>
            <div className='flex items-center justify-between'>
              <FormField
                control={form.control}
                name='remember'
                render={({ field }) => (
                  <FormItem className='flex items-center space-x-2 space-y-0'>
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel className='font-normal'>Manter conectado</FormLabel>
                    <FormMessage>&nbsp;</FormMessage>
                  </FormItem>
                )}
              />

              <div className='text-sm leading-6'>
                <Link href='/forgot-password'>{'Esqueceu a senha?'}</Link>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center space-y-4'>
              <Button type='submit' className='w-full'>
                Entrar
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default Login;
