import React, { NextPage } from "next";
import { useState, useEffect } from "react";
import { ApplicationWrapper } from "../../components/layout/ApplicationWrapper";
import { PokemonList } from "../../components/Pokemon/PokemonList";

interface TProps {
  response: string;
}

const PokemonIndex: NextPage<TProps> = () => {
  const [page, setPage] = useState(1);
  const handlePageChange = () => {
    setPage(page + 19);
  };

  return (
    <ApplicationWrapper
      title="Índice de pokémones"
      description="Índice de pokémones por página"
    >
      <div className="m-5">
        <h2>
          Bloque <span className="italic">{page}</span>
        </h2>
        <button className="hover:font-bold" onClick={handlePageChange}>
          Siguiente
        </button>
      </div>
      <PokemonList limit={50} offset={page} />
    </ApplicationWrapper>
  );
};

export default PokemonIndex;
