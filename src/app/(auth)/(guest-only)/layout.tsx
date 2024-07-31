import GuestOnlyRoute from '~/hocs/GuestOnlyRoute';

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return <GuestOnlyRoute>{children}</GuestOnlyRoute>;
};

export default Layout;
