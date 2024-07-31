'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { AuthHeader } from '~/components/AuthHeader';
import { Button } from '~/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import Link from '~/components/ui/link';
import { cn } from '~/lib/utils';

const formSchema = z.object({
  password: z.string().min(8),
  passwordConfirmation: z.string().min(8),
});
type FormData = z.infer<typeof formSchema>;

const defaultValues: FormData = {
  password: '',
  passwordConfirmation: '',
};

const ResetPassword = () => {
  const form = useForm<FormData>({
    defaultValues,
    mode: 'onBlur',
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async data => {
    console.log(data);
  };

  return (
    <>
      <AuthHeader title={'Esqueceu sua senha?'} subtitle={'Entre com seu e-mail e enviaremos um link para você redefinir sua senha.'} />
      <div className='mt-10'>
        <Form {...form}>
          <form className='space-y-2' onSubmit={form.handleSubmit(onSubmit)}>
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

            <div>
              <FormField
                control={form.control}
                name='passwordConfirmation'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirme a senha</FormLabel>
                    <FormControl>
                      <Input type='password' placeholder={'•'.repeat(8)} {...field} className={cn({ '!border-destructive': form.formState.errors[field.name] })} />
                    </FormControl>
                    <FormMessage>&nbsp;</FormMessage>
                  </FormItem>
                )}
              />
            </div>

            <div className='flex flex-col items-center justify-center space-y-4'>
              <Button type='submit' className='w-full'>
                Redefinir senha
              </Button>
            </div>

            <div className='flex items-center justify-center'>
              <span className='inline-flex items-center text-sm leading-6'>
                Lembrou da senha?{' '}
                <Link className='ml-2' href='/login'>
                  Voltar para o login
                </Link>
              </span>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default ResetPassword;
