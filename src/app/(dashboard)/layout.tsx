import Providers from '~/components/Providers';
import DashboardLayout from '~/layouts/DashboardLayout';

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <Providers>
      <DashboardLayout>{children}</DashboardLayout>
    </Providers>
  );
};

export default Layout;
