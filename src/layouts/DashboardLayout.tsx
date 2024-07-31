type DashboardLayoutProps = {
  children: React.ReactNode;
};
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

DashboardLayout.displayName = 'DashboardLayout';
export default DashboardLayout;
