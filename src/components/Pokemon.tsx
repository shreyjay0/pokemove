import React from "react";

type PokemonProps = {
  pokemon: string;
  type?: string;
};

const Pokemon = ({ pokemon, type }: PokemonProps) => {
  return (
    <div className="text-xl shadow-lg rounded-lg min-h-[16rem] max-h-[16rem]">
      <div className="py-4 font-semibold bg-slate-300 rounded-t-lg">
        You will be catching
      </div>
      <div className="p-4 h-50 flex items-center justify-center my-auto">
        <img src={pokemon} alt="pokemon" className="max-h-[10rem]" />
      </div>
    </div>
  );
};

export default Pokemon;
