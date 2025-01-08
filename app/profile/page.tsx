'use client';

import { useSession } from 'next-auth/react';

export default function Profile() {
  const { data: session } = useSession();

  return (
    <div className="flex justify-center items-center mt-16">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 flex items-center space-x-6">
          <img
            className="w-20 h-20 rounded-full border-2 border-gray-300"
            src={session?.user?.image || 'default.png'}
            alt="Profile Picture"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {session?.user?.name}
            </h2>
            <p className="text-gray-500">{session?.user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
