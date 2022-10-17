import Head from "next/head";
import Link from "next/link";
import React, { FC, PropsWithChildren } from "react";

interface TProps {
  title: string;
  description?: string;
  notitle?: boolean;
}

export const ApplicationWrapper: FC<PropsWithChildren<TProps>> = ({
  title,
  description,
  notitle,
  children,
}) => {
  return (
    <div className="bg-white py-12">
      <Head>
        {notitle ? <title>Pokédex</title> : <title>{title} | Pokédex</title>}
        {description && <meta name="description" content={description} />}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="container max-w-screen-lg mx-auto pb-10 mt-15">
          <Link href="/">
            <img className="cursor-pointer mx-auto" src="/logo.svg" />
          </Link>
        </div>
      </header>
      <main className="container max-w-screen-lg mx-auto pb-10 text-center justify-center items-center">
        {children}
      </main>
    </div>
  );
};
