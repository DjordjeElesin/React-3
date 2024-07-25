"use client";
import React, { useEffect, useState } from "react";

export default function Card({ pokemons }) {

  /* useEffect(() => {
    console.log("Card: ", pokemons.results);
  }, [pokemons]); */
  return (
    <>
      {pokemons &&
        pokemons.results.map((pokemon) => (
          <div key={pokemon.name}>
            <h2>{`Name: ${
              pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
            }`}</h2>
          </div>
        ))}
      
    </>
  );
}
