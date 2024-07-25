import { Inter } from "next/font/google";
import React, {createContext, useEffect, useState} from 'react'
import Theme from './components/Theme.js'
import useFetch from "./components/useFetch.js";
import Card from "./components/Card.js";
import useCounter from "./components/useCounter.js";

const inter = Inter({ subsets: ["latin"] });

export  const ThemeContext =  createContext();

export default function Home() {
  const [theme, setTheme] = useState('dark');
  const {data, error} = useFetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
  const {count, handleChangeCounter} = useCounter(0);

  useEffect(() => {
    console.log("Index",data);
  }, [data]);


  return (
    <>
      <div className="container">
        <h1>Theme container</h1>
        <ThemeContext.Provider value={theme}>
          <Theme/>
        </ThemeContext.Provider>
        <Card pokemons = {data}/>

        <div>
          <button onClick={() => handleChangeCounter('decrement')}>-</button>
          <h2>Count: {count}</h2>
          <button onClick={() => handleChangeCounter("increment")}>+</button>
        </div>
      </div>
    </>
  );
}
