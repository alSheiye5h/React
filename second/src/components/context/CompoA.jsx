import { createContext, useState } from "react"

import CompoB from "./CompoB"

export const MessageContext = createContext();

function CompoA() {


    let [message, setMessage] = useState("sent From D => ");
    

    return (
        <MessageContext.Provider value={setMessage}>
            <div className="compos">
                    <p>A: {message.length > 15 ? message : ""}</p>
                    <div className="compoX compoa">
                        <p>B:</p>
                            <CompoB/>
                    </div>
            </div>
        </MessageContext.Provider >
    )
}

export default CompoA