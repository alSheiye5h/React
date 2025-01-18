import { useState, useEffect } from "react"

function DigitalClock() {

    let [time, setTime] = useState();

    useEffect(() => {
        let interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        
        return clearInterval(interval);
    }, interval);




    return (
        <div className="clockDiv" >
            <span>aa :</span>    
            <span> aa :</span>    
            <span> aa</span>    

        </div>
    )
}

export default DigitalClock