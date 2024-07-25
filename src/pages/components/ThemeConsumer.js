import React, {useContext} from "react";
import { ThemeContext } from "../index.js";

export default function ThemeConsumer(){
    const theme = useContext(ThemeContext);

    return (
        <div className="container">
            <h1>{`The current theme is: ${theme}`}</h1>
        </div>
    )
}