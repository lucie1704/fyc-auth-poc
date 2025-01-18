import { NextRequest, NextResponse } from 'next/server';
import * as cookie from 'cookie';

export async function POST(req: NextRequest) {
  try {
    const { username } = await req.json();

    if (!username) {
      return new NextResponse(
        JSON.stringify({ error: "Nom d'utilisateur requis" }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const serializedCookie = cookie.serialize('username', username, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24,
      path: '/',
    });

    const response = new NextResponse(
      JSON.stringify({ message: 'Connexion réussie!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

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
