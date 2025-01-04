'use client';

export default function Home() {
  return (
    <div className="flex items-center mt-32 justify-center h-full">
      <div className="w-2/3">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Les systèmes d'authentification
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Ce projet a pour but de vous présenter les 3 systèmes
            d'authentifications vus en cours et comment les implémenter dans ce
            projet POC (proof of concept). Retrouvez chaque énoncé de TP via les
            pages accessibles ci-dessus.
          </p>
        </div>
      </div>
    </div>
  );
}
