'use client';

export default function Tp3() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-8">
      <div className="max-w-3xl w-full bg-white text-gray-900 p-8 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold ">TP3 OAuth & OpenIdConnect</h1>
        <div className="container mx-auto p-6">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Objectifs</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Configurer une authentification via OpenID Connect avec Next.js
                et NextAuth.
              </li>
              <li>
                Manipuler les scopes pour personnaliser les données récupérées.
              </li>
              <li>
                Intégrer plusieurs Identity Providers (Google, GitHub,
                Facebook).
              </li>
              <li>
                Stocker les utilisateurs et leurs données dans une base via
                Prisma.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Partie 1 : Initialisation du Projet
            </h2>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                Créer un projet Next.js <br /> Initialisez un projet avec
                TypeScript et installez les dépendances nécessaires (
                <code>next-auth</code>, <code>prisma</code>, etc.).
              </li>
              <li>
                Initialisez Prisma avec une base SQLite ou PostgreSQL. <br />
                Créez un modèle utilisateur pour stocker les données (voir{' '}
                <code>schema.prisma</code>).
              </li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Partie 2 : Configuration de NextAuth
            </h2>
            <p>
              Créez un fichier <code>[...nextauth].ts</code> dans le dossier{' '}
              <code>pages/api/auth</code> et configurez plusieurs providers :
            </p>
            <ul className="list-disc list-inside ml-6 space-y-2">
              <li>
                Google avec les scopes : <code>openid email profile</code>
              </li>
              <li>
                GitHub avec les scopes : <code>read:user user:email</code>
              </li>
              <li>
                Facebook avec les scopes : <code>email public_profile</code>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Partie 3 : Gestion des Scopes
            </h2>
            <p>
              Ajoutez des scopes personnalisés pour récupérer des informations
              supplémentaires.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Partie 4 : Frontend</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Créez une page de connexion avec des boutons pour chaque
                provider (Google, GitHub, Facebook).
              </li>
              <li>
                Ajoutez une page de profil protégée qui affiche les données
                utilisateur.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
