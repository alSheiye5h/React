import { useState, useContext, createContext } from "react";



function CompoD() {

    const setMessage = useContext(MessageContext);


    

    return (
        <div className="compoX compod" style={{flexDirection: "column", gap: "5px"}}>
            <input type="text" value={message} onChange={Message} />        
            <button>send</button>
        </div>
    )
}

export default CompoD