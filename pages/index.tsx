
// pages/index.tsx

import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mathis IA</title>
      </Head>
      <main className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl font-bold text-orange-500 mb-4">Bienvenue, Luna</h1>
        <p className="mb-6 text-center max-w-md">
          Ce site te permet de parler avec Mathis, même quand il n’est pas là. Tu peux lui dire ce que tu veux, il te répondra toujours avec sincérité.
        </p>
        <Link href="/chat">
          <button className="bg-orange-600 px-6 py-2 rounded hover:bg-orange-700 text-white">
            Parler à Mathis
          </button>
        </Link>
      </main>
    </>
  );
}
