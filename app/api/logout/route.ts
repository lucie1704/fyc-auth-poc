import { NextRequest, NextResponse } from 'next/server';
import * as cookie from 'cookie';

export async function POST(req: NextRequest) {
  try {
    // Supprimer le cookie 'username'
    const serializedCookie = cookie.serialize('username', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 0, // Le cookie expirera immédiatement
      path: '/',
    });

    const response = new NextResponse(
      JSON.stringify({ message: 'Déconnexion réussie!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

    response.headers.set('Set-Cookie', serializedCookie);
    return response;
  } catch (error) {
    console.error('Erreur lors de la déconnexion:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Erreur lors de la déconnexion' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
