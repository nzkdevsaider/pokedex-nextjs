import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";
import axios from "axios";

const PokemonDetail: NextPage = ({ pokemon }) => {
  return (
    <ApplicationWrapper title={pokemon.name.toUpperCase()}>
      <div className="m-5">
        <div className="m-auto">
          <img
            className="object-scale-down h-60 w-60 mx-auto"
            src={pokemon.sprites.other["official-artwork"].front_default}
          />
        </div>
        <div className="flex">
          <h1 className="m-auto text-5xl font-bold font-mono">
            {pokemon.name.toUpperCase()}
          </h1>
        </div>
        <div className="flex">
          <h2 className="m-auto">
            <ul
              className={`w-full grid ${
                pokemon.types.length > 1 ? "grid-cols-2" : "grid-cols-1"
              }`}
            >
              {pokemon.types.map((d) => (
                <li key={d.type.name}>{d.type.name}</li>
              ))}
            </ul>
          </h2>
        </div>
      </div>
    </ApplicationWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios.get(
    process.env.NEXT_PUBLIC_API_URL + "/" + context.params?.id.toLowerCase()
  );
  const pokemon = await res.data;

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonDetail;
