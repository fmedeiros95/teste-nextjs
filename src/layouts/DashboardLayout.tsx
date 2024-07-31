type DashboardLayoutProps = {
  children: React.ReactNode;
};
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <>
      <aside className='hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:flex-col transition-all duration-300 ease-in-out lg:w-72'>
        <div className='bg-white flex grow flex-col gap-y-4 border-r'>
          <div className='h-20 border-b flex items-center justify-center'>Sidebar Logo</div>
          <div className='flex-1 flex flex-col justify-center items-center'>Sidebar Menu</div>
          <div className='mt-auto border-t flex justify-center items-center h-16'>Sidebar Footer</div>
        </div>
      </aside>
      <div className='flex flex-col justify-between min-h-screen transition-all duration-300 ease-in-out lg:pl-72'>
        <header className='sticky top-0 w-full px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center gap-x-4 sm:gap-x-6 mx-auto mt-4 bg-white border px-6 h-16 rounded-lg'>
            <div>Menu toggle + Search</div>
            <div>User Info + shortcuts</div>
          </div>
        </header>
        <main className='flex-1 p-4 sm:p-6 lg:p-8'>{children}</main>
        <footer className='bg-transparent w-full px-4 sm:px-6 lg:px-7'>
          <div className='mx-auto py-3 text-sm md:flex md:items-center md:justify-between'>
            <div className='flex justify-center space-x-6 md:order-2'>
              Feito com ❤️ por{' '}
              <a className='font-medium ml-1 text-blue-500 hover:underline' href='mailto:medeiros.dev@gmail.com'>
                Felipe Medeiros
              </a>
            </div>
            <div className='mt-4 md:order-1 md:mt-0'>
              <p className='text-center'>
                &copy; 2024 <b>Create Next App</b>. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

DashboardLayout.displayName = 'DashboardLayout';
export default DashboardLayout;
