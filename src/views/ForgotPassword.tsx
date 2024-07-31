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
  email: z.string().email(),
});
type FormData = z.infer<typeof formSchema>;

const defaultValues: FormData = {
  email: '',
};

const ForgotPassword = () => {
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

            <div className='flex flex-col items-center justify-center space-y-4'>
              <Button type='submit' className='w-full'>
                Enviar código de verificação
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

export default ForgotPassword;
