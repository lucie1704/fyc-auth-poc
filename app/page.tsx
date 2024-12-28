"use client";

import { LoginButton, LogoutButton } from "./components/AuthButtons";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  
  if (status === "loading") {
    return <p>Chargement...</p>;
  }
  
  if (!session) {
    return (
      <div>
        <p>Vous n&apos;êtes pas connecté.</p> 
        <LoginButton/>
      </div>
    );
  }
  
  return (
    <div>
      <h1>Bienvenue {session.user?.name} !</h1>
      <LogoutButton/>
    </div>
  );
}
