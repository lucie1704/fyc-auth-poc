# Projet d'Authentification avec Next.js, NextAuth et Prisma

Ce projet est une application Next.js qui utilise NextAuth et Prisma pour voir ensemble comment gérer l'authentification via les 3 méthodes suivantes :

- Via les cookies
- Via les JSON Web Tokens (JWT)
- Via OAuth et OpenIdConnect notamment grâce à des Authentication Providers comme Google, GitHub, etc.

## Sources

N'hésitez pas à consulter les documentations officielles des outils utilisés dans ce projet

- [Next.js](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Prisma](https://www.prisma.io/)

## Installation

### 1. Clonez ce projet

```bash
 git clone git@github.com:lucie1704/fyc-auth-poc.git
```

### 2. Installer les dépendances

```bash
npm i
```

### 3. Configuer votre .env

Créer votre .env et suivre les indications du .env.example

### 4. Executer la migration de la DB

```bash
prisma migrate dev
```

### 5. Lancer votre projet

```bash
npm run dev
```

### 6. Lancer prisma pour accéder à la vue de la DB

```bash
prisma studio
```
