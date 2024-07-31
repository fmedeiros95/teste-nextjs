import Providers from '~/components/Providers';
import AuthGuard from '~/hocs/AuthGuard';

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <Providers>
      <AuthGuard>{children}</AuthGuard>
    </Providers>
  );
};

export default Layout;
