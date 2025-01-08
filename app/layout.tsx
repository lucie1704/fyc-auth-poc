'use client';

import './globals.css';
import { SessionProvider, useSession } from 'next-auth/react';
import { AppBar } from './components/AppBar';
import { AppLoader } from './components/AppLoader';

const excludedRoutes = ['/signin'];
import { usePathname } from 'next/navigation';

const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();
  const pathname = usePathname();

  const isExcludedRoute = excludedRoutes.includes(pathname);
  if (status === 'loading') {
    return <AppLoader />;
  }

  return (
    <>
      {!isExcludedRoute && <AppBar />}
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
      <body className="bg-gray-50 flex flex-col">
        <SessionProvider>
          <LayoutContent>{children}</LayoutContent>
        </SessionProvider>
      </body>
    </html>
  );
}
