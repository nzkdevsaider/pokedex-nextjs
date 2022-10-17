import React, { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface IPokemonData {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    other: {
      "official-artwork": string;
    };
  };
}

interface TProps {
  pokemon: IPokemonData;
}

const Pokemon: FC<TProps> = ({ pokemon }) => {
  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <motion.li
        whileTap={{ scale: 0.8 }}
        className="boxdex cursor-pointer flex lg:flex-col"
      >
        <div className="lg:m-auto md:ml-20 sm:ml-20">
          <img
            className="object-center lg:mt-5"
            src={`https://img.pokemondb.net/sprites/sword-shield/icon/${pokemon.name}.png`}
          />
        </div>
        <p className="text-center hover:font-bold text-[#555454] lg:p-5 my-auto mx-auto">
          {pokemon.name}
        </p>
      </motion.li>
    </Link>
  );
};

export default Pokemon;
