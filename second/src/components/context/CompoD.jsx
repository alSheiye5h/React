import { useState, useContext, createContext } from "react";
import { MessageContext } from './CompoA' 
import { DisplayContext } from './CompoB'

function CompoD() {

    let setDisplay = useContext(DisplayContext);

    let sendMsg = useContext(MessageContext);

    let [localMessage, setLocalMessage] = useState("");

    function localMessageInp(event) {
        const value = event.target.value;

        setLocalMessage(value)
        setDisplay("block")
        setTimeout(() => {
            setDisplay("none")
        }, 1000);
    }



    function sendMessage() {
        setLocalMessage("")
        sendMsg((m) => m+=localMessage)
    }
    
    return (
        <div className="compoX compod" style={{flexDirection: "column", gap: "5px"}}>
            <input type="text" value={localMessage} onChange={localMessageInp} />        
            <button onClick={sendMessage} >send</button>
        </div>
    )
}

export default CompoD