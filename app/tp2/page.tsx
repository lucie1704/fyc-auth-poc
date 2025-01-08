'use client';

export default function Tp2() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-8">
      <div className="max-w-3xl w-full bg-white text-gray-900 p-8 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-8">TP2 JWT</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contexte</h2>
          <p className="text-gray-700">
            Vous devez concevoir une application web permettant à un utilisateur
            de s’authentifier via un mécanisme JWT (JSON Web Token). Une fois
            connecté, il pourra afficher des informations le concernant (nom,
            email, etc.) sur une page dédiée.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Objectif du TP</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Backend :</strong> (Node.js/Express ou Nest.js au choix)
              qui gère :
              <ul className="list-disc list-inside pl-5 space-y-1">
                <li>
                  L’authentification par login/mot de passe (ou un autre moyen
                  si vous le souhaitez).
                </li>
                <li>La génération et la validation d’un token JWT.</li>
              </ul>
            </li>
            <li>
              <strong>Frontend :</strong> (React, Vue, Angular, ou un framework
              de votre choix) qui :
              <ul className="list-disc list-inside pl-5 space-y-1">
                <li>
                  Présente un formulaire de connexion (email et mot de passe).
                </li>
                <li>Récupère et stocke le token JWT renvoyé par le backend.</li>
                <li>
                  Affiche une page de profil avec les informations de
                  l’utilisateur (nom, email, etc.).
                </li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Partie 1 : Mise en place du Backend
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-3">
            <li>
              <strong>
                Initialiser un projet Node.js/Express (ou Nest.js) :
              </strong>
              <ul className="list-disc list-inside pl-5 space-y-1">
                <li>
                  Installez les dépendances nécessaires (ex. jsonwebtoken ou
                  passport-jwt, etc.).
                </li>
                <li>
                  Créez une route POST{' '}
                  <code className="bg-gray-100 px-1 rounded">/auth/login</code>{' '}
                  pour gérer la connexion.
                </li>
              </ul>
            </li>
            <li>
              <strong>Gestion du mot de passe :</strong> Stockez un utilisateur
              en base de données (ou dans un tableau) avec un mot de passe haché
              (ex. bcrypt).
            </li>
            <li>
              <strong>Génération du token JWT :</strong> Générez un token
              contenant l’id de l’utilisateur, son email, et signez-le avec une
              clé secrète.
            </li>
            <li>
              <strong>Middleware de protection :</strong> Vérifiez la validité
              du JWT dans l’en-tête{' '}
              <code className="bg-gray-100 px-1 rounded">
                Authorization: Bearer &lt;token&gt;
              </code>
              .
            </li>
            <li>
              <strong>Endpoint de profil :</strong> Ajoutez une route protégée{' '}
              <code className="bg-gray-100 px-1 rounded">GET /profile</code>{' '}
              pour renvoyer les informations utilisateur.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Partie 2 : Mise en place du Frontend
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-3">
            <li>
              <strong>Initialiser un projet React (ou autre) :</strong> Créez
              une page de login avec champs Email et Mot de passe.
            </li>
            <li>
              <strong>Récupération du token :</strong> Envoyez un POST à{' '}
              <code className="bg-gray-100 px-1 rounded">/auth/login</code> et
              stockez le token reçu.
            </li>
            <li>
              <strong>Appel à la route protégée :</strong> Créez une page{' '}
              <code className="bg-gray-100 px-1 rounded">/profile</code> qui
              envoie le token pour afficher les données utilisateur.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Partie 3 : Scénario d’utilisation
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Ouverture de l’application :</strong> L’utilisateur voit
              la page de login.
            </li>
            <li>
              <strong>Connexion :</strong> L’utilisateur saisit ses informations
              et reçoit un token JWT.
            </li>
            <li>
              <strong>Accès au profil :</strong> Le frontend affiche « Bonjour,
              [nom] », l’email, etc.
            </li>
            <li>
              <strong>Test d’un accès non autorisé :</strong> En cas de token
              manquant ou invalide, une erreur{' '}
              <code className="bg-gray-100 px-1 rounded">401 Unauthorized</code>{' '}
              est renvoyée.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Contraintes & Points attendus
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Clarté du code : séparation des responsabilités.</li>
            <li>
              Gestion des erreurs : statuts adaptés (
              <code className="bg-gray-100 px-1 rounded">401</code>,{' '}
              <code className="bg-gray-100 px-1 rounded">400</code>, etc.).
            </li>
            <li>Stockage sécurisé des mots de passe (ex. bcrypt).</li>
            <li>JWT signé correctement (clé secrète ou RSA).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Bonus (Optionnel)</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Expiration du token et mécanisme de refresh.</li>
            <li>Stockage en base de données réelle.</li>
            <li>Interface graphique soignée.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Livrables</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Un backend fonctionnel avec ses routes protégées par JWT.</li>
            <li>Un frontend avec pages de login et profil.</li>
            <li>Un guide d’installation et de lancement (README).</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
