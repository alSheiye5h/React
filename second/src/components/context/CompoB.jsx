import { createContext, useState } from "react";
import CompoC from "./CompoC";

export const DisplayContext = createContext();

function CompoB() {
   
    let [displayed, setDisplay] = useState("none")

    return (
        <div className="compoX compob">
            <p>C: <span style={{display: displayed}} >D is typing ...</span></p>
            <DisplayContext.Provider value={setDisplay}>
                <CompoC/>
            </DisplayContext.Provider>
        </div>
    )
}

export default CompoB