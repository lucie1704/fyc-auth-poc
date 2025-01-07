import { NextRequest, NextResponse } from 'next/server';
import * as cookie from 'cookie';

export async function POST(req: NextRequest) {
  try {
    // Extraire le nom d'utilisateur du corps de la requête
    const { username } = await req.json();

    // Vérifier que le nom d'utilisateur est fourni
    if (!username) {
      return new NextResponse(
        JSON.stringify({ error: "Nom d'utilisateur requis" }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Sérialisation du cookie avec les options nécessaires
    const serializedCookie = cookie.serialize('username', username, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Sécurisé en production
      maxAge: 60 * 60 * 24, // Expiration de 1 jour
      path: '/', // Cookie accessible sur tout le domaine
    });

    // Créer la réponse avec le cookie
    const response = new NextResponse(
      JSON.stringify({ message: 'Connexion réussie!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

    // Ajouter le cookie à la réponse
    response.headers.set('Set-Cookie', serializedCookie);

    return response;
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Erreur interne du serveur' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
