import { createContext, useState } from "react"

import CompoB from "./CompoB"

export const setMessage = createContext();

function CompoA() {


    let [message, setMessage] = useState("sent From D:");
    

    return (
            <div className="compos">
                    <p>A: {message.length > 11 ? message : ""}</p>
                    <div className="compoX compoa">
                        <p>B:</p>
                            <CompoB/>
                    </div>
            </div>
    )
}

export default CompoA