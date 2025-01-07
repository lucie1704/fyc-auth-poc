import { NextRequest, NextResponse } from 'next/server';
import * as cookie from 'cookie';

export async function GET(req: NextRequest) {
  try {
    const cookies = cookie.parse(req.headers.get('cookie') || '');
    const username = cookies.username;

    if (username) {
      // Si le cookie 'username' est présent, retourner un message de bienvenue
      return NextResponse.json({ username });
    } else {
      // Si le cookie n'est pas présent, répondre avec une erreur
      return NextResponse.json({ error: 'Utilisateur non connecté' }, { status: 401 });
    }
  } catch (error) {
    console.error('Erreur lors de la vérification du cookie:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la vérification de l\'utilisateur' },
      { status: 500 }
    );
  }
}
