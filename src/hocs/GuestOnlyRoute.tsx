import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

type GuestOnlyRouteProps = {
  children: React.ReactNode;
};
export default async function GuestOnlyRoute({ children }: Readonly<GuestOnlyRouteProps>) {
  const session = await getServerSession();
  if (session) {
    redirect('/dashboard');
  }

  return <>{children}</>;
}
