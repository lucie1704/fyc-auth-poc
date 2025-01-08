'use client';

import { useSession } from 'next-auth/react';
import { useState } from 'react';

export const AppBar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-600" href="/">
          <span className="sr-only">Accueil</span>
          <img src="logo.png" alt="logo" className="w-10 h-10" />
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/tp1"
                >
                  TP1 Cookies
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/tp2"
                >
                  TP2 JWT
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/tp3"
                >
                  TP3 OAuth & OIDC
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/help"
                >
                  Aide
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {session ? (
              // Affiche le menu utilisateur s'il est connecté
              <div className="hidden md:relative md:block">
                <button
                  className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
                  onClick={toggleMenu}
                >
                  <img
                    src={session?.user?.image || 'default.png'}
                    alt="User Avatar"
                    className="size-10 object-cover"
                  />
                </button>

                <div
                  className={`absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all ${
                    isOpen
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                  role="menu"
                >
                  <div className="p-2">
                    <a
                      href="/profile"
                      className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      role="menuitem"
                    >
                      Mon profil
                    </a>
                  </div>

                  <div className="p-2">
                    <form method="POST" action="/api/auth/signout">
                      <button
                        type="submit"
                        className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                        role="menuitem"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                          />
                        </svg>
                        Se déconnecter
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              // Affiche le bouton pour se connecter si utilisateur pas connecté
              <div className="sm:flex sm:gap-4">
                <a
                  className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                  href="/signin"
                >
                  Se connecter
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
