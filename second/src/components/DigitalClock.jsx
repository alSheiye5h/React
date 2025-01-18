import { useState, useEffect } from "react";


function DigitalClock() {

    let [time, setTime] = useState(new Date());


    useEffect(() => {
        let interval = setInterval(() => {
            setTime(new Date())
        })

        return () => clearInterval(interval)
    }, [])

    let formatedDate = (time) => String(time).padStart(2, "0");

    return (
        <div className="clockDiv">
            <span>{formatedDate(time.getHours())} </span>:
            <span> {formatedDate(time.getMinutes())} </span>:
            <span> {formatedDate(time.getSeconds())}</span>
        </div>
    )

}

export default DigitalClock








































// import { useState, useEffect } from "react"

// function DigitalClock() {

//     let [time, setTime] = useState(new Date());

//     useEffect(() => {
//         let interval = setInterval(() => {
//             setTime(new Date())
//         }, 1000)
        
//         return () => clearInterval(interval);
//     }, []);

//     const formatNumber = (num) => String(num).padStart(2, "0");




//     return (
//         <div className="clockDiv" >
//             <span>{formatNumber(time.getHours())} </span>:    
//             <span> {formatNumber(time.getMinutes())} </span>:   
//             <span> {formatNumber(time.getSeconds())}</span>    

//         </div>
//     )
// }

// export default DigitalClock