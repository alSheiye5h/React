import { useState, useContext, createContext } from "react";
import { setMessage } from './CompoA' 

function CompoD() {

    let sendMsg = useContext(setMessage);

    let [localMessage, setLocalMessage] = useState("");

    function localMessageInp(event) {
        setLocalMessage(event.target.value)
    }

    function sendMessage() {
        setMessage(sendMsg)
    }
    
    return (
        <div className="compoX compod" style={{flexDirection: "column", gap: "5px"}}>
            <input type="text" value={localMessage} onChange={localMessageInp} />        
            <button onClick={sendMessage} >send</button>
        </div>
    )
}

export default CompoD