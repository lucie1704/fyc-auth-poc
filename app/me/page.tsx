'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Pour la navigation
import { usePathname } from 'next/navigation'; // Pour vérifier la route

export default function ProtectedPage() {
  const [username, setUsername] = useState<string | null>(null);
  const [cookieInfo, setCookieInfo] = useState<any>(null);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch('/api/me');
      const data = await res.json();
      if (res.ok) {
        setUsername(data.username);
      } else {
        setUsername(null); // Redirection si non connecté
        if (pathname === '/protected') {
          router.push('/login');
        }
      }
    };

    fetchUser();
    getCookieInfo();
  }, [pathname, router]);

  const getCookieInfo = () => {
    const cookies = document.cookie.split(';');
    const cookieData: any = {};

    cookies.forEach((cookie) => {
      const [key, value] = cookie.trim().split('=');
      if (key === 'username') {
        cookieData.username = value;
      }
    });

    if (cookieData.username) {
      cookieData.httpOnly = true;
      cookieData.secure = document.location.protocol === 'https:';
      cookieData.expiration = 'Non disponible via JS';
    }

    setCookieInfo(cookieData);
  };

  const handleLogout = async () => {
    const res = await fetch('/api/logout', {
      method: 'POST',
    });
    if (res.ok) {
      router.push('/login'); // Redirection après déconnexion
    }
  };

  if (!username) {
    return <p>Vous devez être connecté pour accéder à cette page.</p>;
  }

  return (
    <div>
      <h1>Bienvenue, {username}!</h1>

      <h2 className="mt-8 text-xl font-semibold">Informations du cookie :</h2>
      {cookieInfo ? (
        <ul className="mt-4">
          <li><strong>Nom du cookie :</strong> {cookieInfo.username}</li>
          <li><strong>httpOnly :</strong> {cookieInfo.httpOnly ? 'Oui' : 'Non'}</li>
          <li><strong>Sécurisé (Secure) :</strong> {cookieInfo.secure ? 'Oui' : 'Non'}</li>
          <li><strong>Expiration :</strong> {cookieInfo.expiration}</li>
        </ul>
      ) : (
        <p>Les informations du cookie ne sont pas disponibles.</p>
      )}

      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        onClick={handleLogout}
      >
        Se déconnecter
      </button>
    </div>
  );
}
