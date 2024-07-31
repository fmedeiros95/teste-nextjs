import { getServerSession } from 'next-auth';
import Link from '~/components/ui/link';

const Home = async () => {
  // const { data: session } = useSession();
  const session = await getServerSession();

  return (
    <div className='h-full flex justify-center items-center text-center flex-col'>
      <h1 className='font-bold'>
        Olá <u>{session?.user?.name || 'visitante'}</u>!
      </h1>
      <p>Aqui a gente vai fazer a landing page, ok?</p>
      {session?.user && (
        <Link href='/dashboard' className='mt-4 text-blue-500 hover:underline'>
          Ir para o painel
        </Link>
      )}
      {!session?.user && (
        <Link href='/login' className='mt-4 text-blue-500 hover:underline'>
          Fazer login
        </Link>
      )}
    </div>
  );
};

export default Home;
