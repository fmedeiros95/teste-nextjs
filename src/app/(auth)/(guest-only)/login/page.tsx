import { Metadata } from 'next';
import Login from '~/views/Login';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Entre com seu e-mail e senha para acessar sua conta.',
};

const LoginPage = () => {
  return <Login />;
};

export default LoginPage;
