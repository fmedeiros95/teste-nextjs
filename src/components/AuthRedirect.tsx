'use client';

import { redirect, usePathname } from 'next/navigation';

export default function AuthRedirect() {
  const pathname = usePathname();
  const redirectUrl = `/login?redirectTo=${pathname}`;
  const login = `/login`;
  const homePage = `/dashboard`;

  return redirect(pathname === login ? login : pathname === homePage ? login : redirectUrl);
}
