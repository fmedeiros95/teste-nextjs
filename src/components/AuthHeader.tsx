type AuthHeaderProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
};

export const AuthHeader = ({ title, subtitle }: AuthHeaderProps) => {
  return (
    <div className='text-center'>
      <h2 className='mt-8 text-2xl font-medium leading-9 tracking-tight text-gray-900'>{title}</h2>
      {subtitle && <p className='mt-2 text-sm leading-6 text-gray-500'>{subtitle}</p>}
    </div>
  );
};
