'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Pour rediriger
import { usePathname } from 'next/navigation'; // Pour vérifier la route actuelle

export default function LoginPage() {
  const [username, setUsername] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const router = useRouter();
  const pathname = usePathname(); // Utilisé pour vérifier la route actuelle

  useEffect(() => {
    const checkLoginStatus = async () => {
      const res = await fetch('/api/me');
      const data = await res.json();
      if (res.ok) {
        setIsLoggedIn(true);
        setUsername(data.username);
        if (pathname === '/login') {
          router.push('/me');
        }
      }
    };

    checkLoginStatus();
  }, [pathname, router]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    });

    const data = await res.json();
    if (res.ok) {
      setIsLoggedIn(true);
      setMessage('Connexion réussie!');
      router.push('/me');
    } else {
      setMessage(data.error || 'Erreur de connexion');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Connexion
        </h1>

        {!isLoggedIn ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nom d'utilisateur"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Se connecter
            </button>
          </form>
        ) : (
          <p className="text-lg text-gray-700 mb-4">Redirection...</p>
        )}

        {message && (
          <p className="mt-4 text-center text-lg text-gray-600">{message}</p>
        )}
      </div>
    </div>
  );
}
