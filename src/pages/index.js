import React, { createContext, useEffect, useState } from "react";
import Theme from "./components/Theme.js";
import useFetch from "./components/useFetch.js";
import Card from "./components/Card.js";
import useCounter from "./components/useCounter.js";
import { DataContext } from "./components/DataContext.js";

export const ThemeContext = createContext();
//export const DataContext = createContext();

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const { data, error } = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
  );
  const { count, handleChangeCounter } = useCounter(0);

  useEffect(() => {
    console.log("Index", data);
  }, [data]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <div className="container">
        <h1>Theme container</h1>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Theme />
        </ThemeContext.Provider>

        <DataContext.Provider value={data}>
          <Card />
        </DataContext.Provider>

        <div>
          <button
            className="counterBtn"
            onClick={() => handleChangeCounter("decrement")}
          >
            -
          </button>
          <h2>Count: {count}</h2>
          <button
            className="counterBtn"
            onClick={() => handleChangeCounter("increment")}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
