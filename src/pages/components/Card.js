"use client";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./DataContext.js";

export default function Card() {
  const pokemons = useContext(DataContext);

  /* useEffect(() => {
    console.log("Card: ", pokemons.results);
  }, [pokemons]); */
  return (
    <div className="pokemonContr">
      {pokemons &&
        pokemons.results.map((pokemon) => (
          <div key={pokemon.name}>{`Name: ${
            pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
          }`}</div>
        ))}
    </div>
  );
}
