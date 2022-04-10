import React from "react";

type PokemonProps = {
  pokemon: string;
  type?: string;
};

const Pokemon = ({ pokemon, type }: PokemonProps) => {
  return (
    <div className="text-xl shadow-lg rounded-lg min-h-[22rem] min-h-[22srem]">
      <div className="py-4 font-semibold bg-slate-300 rounded-t-lg">
        Catch this Pokemon!
      </div>
      <div className="p-12 h-50 flex items-center justify-center my-auto">
        <img src={pokemon} alt="pokemon" className="max-h-[12rem]" />
      </div>
    </div>
  );
};

export default Pokemon;
