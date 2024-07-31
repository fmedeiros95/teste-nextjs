type AuthLayoutProps = {
  children: React.ReactNode;
};
const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <section className='bg-white max-h-screen'>
      <div className='flex flex-col lg:flex-row justify-between min-h-screen'>
        <div className='lg:w-1/2 p-4 md:p-6 lg:p-8 max-h-screen overflow-y-auto'>
          <div className='flex justify-center items-center h-full'>
            <div className='max-w-[450px] m-auto w-full'>
              <div className='flex justify-center'>
                <img src='/images/logo-2.png' alt='logo' className='h-auto w-100 max-w-[250px]' />
              </div>
              {children}
              <nav className='flex items-center justify-center flex-wrap gap-x-11 pt-24'>
                <a href='#!' className='text-sm'>
                  Termos & Condições
                </a>
                <a href='#!' className='text-sm'>
                  Política de Privacidade
                </a>
              </nav>
              <p className='text-center text-sm mt-6'>
                &copy; 2024 <b>Lailla.io</b>. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
        <div className='lg:w-1/2 lg:block hidden bg-[#F6FAFF] p-20 relative min-h-screen'>
          <ul>
            <li className='absolute top-10 left-8'>
              <img src='/images/auth/square.svg' alt='' />
            </li>
            <li className='absolute right-12 top-14'>
              <img src='/images/auth/vline.svg' alt='' />
            </li>
            <li className='absolute bottom-1 left-8'>
              <img src='/images/auth/dotted.svg' alt='' />
            </li>
          </ul>

          <div className='flex flex-col justify-center items-center h-full'>
            <img className='grow' src='/images/auth/signin.svg' alt='' />
            <div className='text-center max-w-lg px-1.5 m-auto'>
              <h3 className='font-medium text-black text-4xl mb-4'>{'Rápido, Prático e Fácil'}</h3>
              <p className='text-sm font-medium'>
                <b>Lailla.io</b> é a ferramenta ideal para te auxiliar a se comunicar com seus clientes de forma rápida e prática. Através de uma interface simples e intuitiva, você poderá criar e
                enviar mensagens de texto, áudio e vídeo para seus clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AuthLayout.displayName = 'AuthLayout';
export default AuthLayout;
