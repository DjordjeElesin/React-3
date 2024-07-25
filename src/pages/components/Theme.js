import React, {useContext} from "react";
import { ThemeContext } from "../index.js";
import ThemeConsumer from "./ThemeConsumer.js"

export default function Theme(){
    return (
        <div className="container" >
            <ThemeConsumer />
        </div>
    )
}