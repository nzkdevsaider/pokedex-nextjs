import React, { NextPage } from "next";
import { ApplicationWrapper } from "../components/layout/ApplicationWrapper";
import { PokemonList } from "../components/Pokemon/PokemonList";
import Router, { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useState } from "react";

type HomeProps = {
  response: string;
};

const Home: NextPage<HomeProps> = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    if (search !== "") {
      router.push(`/pokemon/${search}`);
    }
  };

  return (
    <ApplicationWrapper notitle={true}>
      <div className="m-10">
        <form onSubmit={onSearch}>
          <div className="relative">
            <motion.input
              whileHover={{ scale: 1.01 }}
              type="text"
              className="searchdex placeholder:italic text-center text-2xl p-4 pl-10 w-full rounded-lg border focus:ring-blue-500 focus:border-blue-500"
              placeholder="Pokémon o número..."
              onChange={onChangeSearch}
            />
          </div>
        </form>
      </div>
      <div className="mt-15 mx-5">
        <div className="flex mb-5">
          <h1 className="text-left text-[25px] italic font-bold">
            Pokémon aleatorio
          </h1>
          <button className="ml-3" onClick={() => Router.reload()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col content-center">
          <PokemonList limit={10} />
        </div>
      </div>
    </ApplicationWrapper>
  );
};

export default Home;
