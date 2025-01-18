import { useState, useContext, createContext } from "react";
import { MessageContext } from './CompoA'


function CompoD() {

    const setMessage = useContext(MessageContext);

    const [localMessage, setLocalMessage] = useState(""); 

    function localMessageInp(event) {
        setLocalMessage(event.target.value)
    }

    function sendMessage() {
        setMessage(localMessage)
    }

    return (
        <div className="compoX compod" style={{flexDirection: "column", gap: "5px"}}>
            <input type="text" value={localMessage} onChange={localMessageInp} />        
            <button onClick={sendMessage} >send</button>
        </div>
    )
}

export default CompoD