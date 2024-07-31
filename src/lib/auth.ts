import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      type: 'credentials',
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as { email: string; password: string };
        try {
          const res = await fetch(`${process.env.API_URL}/v1/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });
          const data = await res.json();
          console.log(res, data);

          if (res.status >= 400 && res.status <= 599) throw new Error(JSON.stringify(data));
          if (res.status === 201) return data;
          return null;
        } catch (e: any) {
          throw new Error(e.message);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // ** 30 days
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.name = token.name;
      }
      return session;
    },
  },
};
