import { getServerSession } from 'next-auth';
import AuthRedirect from '~/components/AuthRedirect';

type AuthGuardProps = {
  children: React.ReactNode;
};
export default async function AuthGuard({ children }: Readonly<AuthGuardProps>) {
  const session = await getServerSession();

  return <>{session ? children : <AuthRedirect />}</>;
}
