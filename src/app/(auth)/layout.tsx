import Providers from '~/components/Providers';
import AuthLayout from '~/layouts/AuthLayout';

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <Providers>
      <AuthLayout>{children}</AuthLayout>
    </Providers>
  );
};

export default Layout;
