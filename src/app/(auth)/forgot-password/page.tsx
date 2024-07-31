import { Metadata } from 'next';
import ForgotPassword from '~/views/ForgotPassword';

export const metadata: Metadata = {
  title: 'Esqueceu sua senha?',
  description: 'Entre com seu e-mail e enviaremos um link para você redefinir sua senha.',
};

const ForgotPasswordPage = () => {
  return <ForgotPassword />;
};

export default ForgotPasswordPage;
