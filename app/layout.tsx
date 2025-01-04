'use client';

import './globals.css';
import { SessionProvider, useSession } from 'next-auth/react';
import { AppBar } from './components/AppBar';
import { AppLoader } from './components/AppLoader';

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();

  if (status === 'loading') {
    return <AppLoader />;
  }

  return (
    <>
      <AppBar />
      {children}
    </>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 h-screen flex flex-col">
        <SessionProvider>
          <LayoutContent>{children}</LayoutContent>
        </SessionProvider>
      </body>
    </html>
  );
}
