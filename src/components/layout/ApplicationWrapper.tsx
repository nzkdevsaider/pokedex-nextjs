import Head from "next/head";
import Link from "next/link";
import React, { FC, PropsWithChildren } from "react";

interface TProps extends PropsWithChildren {
  title: string;
  description: string;
  notitle: boolean;
}

export const ApplicationWrapper: FC<TProps> = ({
  title,
  description,
  notitle,
  children,
}) => {
  return (
    <div className="bg-white">
      <Head>
        {notitle ? <title>Pokédex</title> : <title>{title} | Pokédex</title>}
        {description && <meta name="description" content={description} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="container max-w-screen-lg mx-auto pb-10 mt-20">
          <Link href="/">
            <img className="cursor-pointer mx-auto" src="/logo.svg" />
          </Link>
        </div>
      </header>
      <main className="container max-w-screen-lg mx-auto pb-10 text-center justify-center items-center">
        {children}
      </main>
      <footer className="w-full static bottom-0 p-4 bg-white rounded-lg shadow md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/">
            <img src="/logo.svg" className="mr-3 h-8" alt="Pokédex" />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0">
            <li>
              <div className="mr-4 hover:underline md:mr-6">
                <Link href="/about">Sobre el proyecto</Link>
              </div>
            </li>
            <li>
              <a
                href="https://nzkdevsaider.github.io/"
                className="mr-4 hover:underline md:mr-6"
              >
                Contacto
              </a>
            </li>
            <li>
              <a
                href="https://github.com/nzkdevsaider/pokedex-nextjs"
                className="hover:underline"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
