import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import axios from "axios";
import useSWR from "swr";

interface TProps {
  limit: number;
}

const fetcher = (...args) =>
  axios
    .get(...args)
    .then((r) => r.data.results)
    .catch((e) => console.error(e));

const pokeApiOffset = 950;
const randomnizeOffset = Math.floor(Math.random() * (pokeApiOffset - 1)) + 1;

export const PokemonList: FC<TProps> = ({ limit, offset }) => {
  const pokeApiLimit = limit;

  if (!offset) offset = randomnizeOffset;
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}?limit=${pokeApiLimit}&offset=${offset}`,
    fetcher,
    {
      revalidateOnMount: true,
    }
  );
  return (
    <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {data?.map((pkmn) => (
        <Pokemon key={pkmn.name} pokemon={pkmn} />
      ))}
    </ul>
  );
};
