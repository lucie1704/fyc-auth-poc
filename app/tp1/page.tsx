'use client';

export default function Tp1() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-8">
      <div className="max-w-3xl w-full bg-white text-gray-900 p-8 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold">
          TP1 : Gestion des sessions et des cookies
        </h1>

        <h3 className="text-xl font-semibold mt-4">Objectif :</h3>
        <p className="mt-2 text-lg ">
          Ce travail pratique a pour but d’apprendre à gérer les sessions
          utilisateur avec Next.js. Vous allez explorer la création,
          l’utilisation et la suppression de cookies sécurisés pour maintenir
          l’état d’une session utilisateur dans une application web.
        </p>

        <h3 className="text-xl font-semibold  mt-4">
          Partie 1 : Mise en place du projet
        </h3>
        <ol className="list-decimal pl-6 mt-2 text-lg ">
          <li>Initialisez une nouvelle application Next.js.</li>
          <li>
            Configurez TypeScript et installez les dépendances nécessaires,
            comme le package <code>cookie</code>.
          </li>
        </ol>

        <h3 className="text-xl font-semibold  mt-4">
          Partie 2 : Gestion des utilisateurs
        </h3>
        <ol className="list-decimal pl-6 mt-2 text-lg ">
          <li>
            <strong>Connexion utilisateur :</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>
                Créez une route API <code>/api/login</code> pour générer un
                cookie de session.
              </li>
              <li>
                Utilisez des cookies sécurisés avec les propriétés{' '}
                <code>httpOnly</code>, <code>secure</code>, et{' '}
                <code>maxAge</code>.
              </li>
            </ul>
          </li>
          <li>
            <strong>Déconnexion utilisateur :</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>
                Créez une route API <code>/api/logout</code> pour supprimer le
                cookie de session.
              </li>
            </ul>
          </li>
          <li>
            <strong>Vérification de session :</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>
                Créez une route API <code>/api/me</code> pour vérifier la
                présence du cookie et retourner les informations de session.
              </li>
            </ul>
          </li>
        </ol>

        <h3 className="text-xl font-semibold mt-4">
          Partie 3 : Création des pages
        </h3>
        <ol className="list-decimal pl-6 mt-2 text-lg ">
          <li>
            <strong>Page de connexion :</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>
                Permettez à l’utilisateur de saisir son nom pour se connecter.
              </li>
              <li>
                Affichez un message de succès ou d’erreur en fonction de la
                réponse du serveur.
              </li>
            </ul>
          </li>
          <li>
            <strong>Page protégée :</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>
                Vérifiez la session utilisateur via <code>/api/me</code>.
              </li>
              <li>
                Affichez un message de bienvenue si l’utilisateur est connecté.
              </li>
              <li>
                Ajoutez un bouton de déconnexion pour supprimer le cookie.
              </li>
            </ul>
          </li>
          <li>
            <strong>Informations sur la session :</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>
                Affichez des détails sur le cookie (nom, statut{' '}
                <code>httpOnly</code>, <code>secure</code>, expiration).
              </li>
            </ul>
          </li>
        </ol>

        <h3 className="text-xl font-semibold  mt-4">Partie 4 : Bonus</h3>
        <ul className="list-disc pl-6 mt-2 text-lg ">
          <li>
            Ajoutez une persistance avancée en stockant des informations
            supplémentaires localement.
          </li>
          <li>Affinez la gestion des erreurs avec des messages détaillés.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Critères de réussite :</h3>
        <ul className="list-disc pl-6 mt-2 text-lg ">
          <li>
            La page de connexion crée correctement un cookie de session
            sécurisé.
          </li>
          <li>
            La page protégée est uniquement accessible pour les utilisateurs
            connectés.
          </li>
          <li>
            Le bouton de déconnexion supprime le cookie et redirige
            l’utilisateur.
          </li>
          <li>Les informations sur le cookie sont affichées correctement.</li>
        </ul>
      </div>
    </div>
  );
}
