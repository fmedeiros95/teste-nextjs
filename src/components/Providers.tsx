import React from 'react';
import { NextAuthProvider } from '~/contexts/nextAuthProvider';

type ProvidersProps = {
  children: React.ReactNode;
};
const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <NextAuthProvider basePath={process.env.NEXTAUTH_BASEPATH}>{children}</NextAuthProvider>;
};

Providers.displayName = 'Providers';
export default Providers;
