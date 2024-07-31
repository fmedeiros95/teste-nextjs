import { Metadata } from 'next';
import ResetPassword from '~/views/ResetPassword';

export const metadata: Metadata = {
  title: 'Redefinir senha',
  description: 'Redefina sua senha para continuar acessando a plataforma.',
};

const ResetPasswordPage = () => {
  return <ResetPassword />;
};

export default ResetPasswordPage;
