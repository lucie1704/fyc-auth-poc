'use client';

import { useSession } from 'next-auth/react';

export default function Tp3() {
  const { data: session } = useSession();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-8">
      <div className="max-w-3xl w-full bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-900">
          TP3 OAuth & OpenIdConnect
        </h1>

        <h3 className="text-xl text-gray-900">Objectif du TP</h3>
        <p className="mt-4 text-lg text-gray-600">
          L'objectif de ce TP est d'apprendre à configurer et à intégrer OAuth
          2.0 et OpenID Connect (OIDC) dans une application web construite avec
          Next.js, NextAuth et Prisma, en utilisant GitHub et Google comme
          fournisseur d’identité. Vous réaliserez une application web simple
          permettant aux utilisateurs de se connecter via leur compte Github ou
          Google. Vous apprendrez également à vérifier l'identité des
          utilisateurs à l'aide d'OpenID Connect.
        </p>

        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-gray-900">
            Consigne du TP
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            <span>1. </span>Générer les clés d'accès (Client ID et Client
            Secret) sur Google et GitHub.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            <span>2. </span>Configurer NextAuth avec plusieurs fournisseurs
            d'identité (Google et GitHub).
          </p>
          <p className="mt-4 text-lg text-gray-700">
            <span>3. </span>Afficher les informations utilisateur après
            connexion (nom, email, photo).
          </p>
          <p className="mt-4 text-lg text-gray-700">
            <span>4. </span>Stocker les informations utilisateur dans une base
            de données PostgreSQL à l’aide de Prisma.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-gray-900">
            Étape 1 : Générer les Client ID et Client Secret sur GitHub et
            Google
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            <span>A. </span>Générer les identifiants GitHub OAuth.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            <span>1. </span>Connectez-vous à GitHub :
            <a
              href="https://github.com/settings/applications/new"
              target="_blank"
              className="text-blue-600 underline"
            >
              {' '}
              https://github.com/settings/applications/new
            </a>
          </p>
          <p className="mt-4 text-lg text-gray-700">
            <span>2. </span>Créez une nouvelle application OAuth :<br />
            Application name : NextAuth GitHub
            <br />
            Homepage URL : http://localhost:3000
            <br />
            Authorization callback URL :
            <a
              href="http://localhost:3000/api/auth/callback/github"
              className="text-blue-600 underline"
            >
              {' '}
              http://localhost:3000/api/auth/callback/github
            </a>
          </p>

          <p className="mt-4 text-lg text-gray-700">
            <span>B. </span>Générer les identifiants Google OAuth.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            <span>1. </span>Connectez-vous à la console Google Cloud :
            <a
              href="https://console.cloud.google.com/apis/credentials"
              target="_blank"
              className="text-blue-600 underline"
            >
              {' '}
              https://console.cloud.google.com/apis/credentials
            </a>
          </p>
          <p className="mt-4 text-lg text-gray-700">
            <span>2. </span>Créez un nouveau projet.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            <span>3. </span>Activez l’API OAuth :<br />. Allez dans API &
            Services {'>'} Library.
            <br />. Recherchez Google Identity Services API et activez-la.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            <span>4. </span>Créez des identifiants OAuth 2.0 :<br />. Allez dans
            API & Services {'>'} Credentials.
            <br />. Cliquez sur Create Credentials {'>'} OAuth client ID.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            <span>5. </span>Configurez les champs suivants :<br />
            Application name : NextAuth Google
            <br />
            Authorized redirect URIs :
            <a
              href="http://localhost:3000/api/auth/callback/google"
              className="text-blue-600 underline"
            >
              {' '}
              http://localhost:3000/api/auth/callback/google
            </a>
          </p>
          <p className="mt-4 text-lg text-gray-700">
            <span>6. </span>Enregistrez et récupérez le Client ID et le Client
            Secret.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-gray-900">
            Étape 2 : Ajouter les variables d'environnement
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Ajoutez les clés générées dans le fichier <code>.env</code> :
          </p>
          <pre className="bg-gray-200 p-4 rounded text-gray-800 mt-4">
            GOOGLE_CLIENT_ID=your_google_client_id
            <br />
            GOOGLE_CLIENT_SECRET=your_google_client_secret
            <br />
            GITHUB_ID=your_github_client_id
            <br />
            GITHUB_SECRET=your_github_secret
            <br />
            NEXTAUTH_SECRET=your_random_generated_secret
            <br />
            NEXTAUTH_URL=http://localhost:3000
          </pre>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-gray-900">
            Étape 3 : Enregistrer les utilisateurs dans la base de données
            PostgreSQL
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Les modèles Prisma nécessaires sont déjà fournis. Assurez-vous que
            les tables sont bien créées dans votre base de données PostgreSQL.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Tout d'abord, connectez-vous à votre base de données PostgreSQL :
          </p>
          <pre className="bg-gray-200 p-4 rounded text-gray-800 mt-4">
            psql -U postgres
          </pre>
          <p className="mt-4 text-lg text-gray-700">
            Une fois connecté, créez la base de données si elle n'existe pas
            encore :
          </p>
          <pre className="bg-gray-200 p-4 rounded text-gray-800 mt-4">
            CREATE DATABASE auth_project;
          </pre>
          <p className="mt-4 text-lg text-gray-700">
            Ensuite, revenez dans votre terminal et exécutez la commande
            suivante pour appliquer les migrations Prisma :
          </p>
          <pre className="bg-gray-200 p-4 rounded text-gray-800 mt-4">
            npx prisma migrate dev --name init
          </pre>
          <p className="mt-4 text-lg text-gray-700">
            Cette commande créera automatiquement les tables nécessaires dans la
            base de données PostgreSQL pour stocker les utilisateurs, les
            sessions et les comptes OAuth.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Vérifiez que les tables ont bien été créées en exécutant la commande
            suivante dans PostgreSQL :
          </p>
          <pre className="bg-gray-200 p-4 rounded text-gray-800 mt-4">\dt</pre>
          <p className="mt-4 text-lg text-gray-700">
            Vous devriez voir une liste des tables créées, notamment :
          </p>
          <ul className="list-disc pl-8 text-lg text-gray-700">
            <li>Account</li>
            <li>Session</li>
            <li>User</li>
            <li>VerificationToken</li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-semibold text-gray-900">
            Étape 4 : Afficher les informations utilisateur
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Dans votre composant AppBar, affichez la photo de l'utilisateur
            connecté en utilisant le hook <code>useSession</code> de NextAuth.{' '}
            <br />
            Et dans la page profil afficher les infos tels que la photo, le nom
            et l'email de l'utilisateur.
          </p>
        </div>
      </div>
    </div>
  );
}
