import { useState } from "react";



function YesNoButtons() {

    // let count = 1;

    // let [bad, setBad] = useState("Bad")

    // let handleNo = () => {
    //     return count < 3 ? alert(`user refused ${count++} !`) : (this.textContent = "enoght", count = 1) ;   
    // }

    // let handleYes = () => {
    //     alert("user accepted !");
    // }

    // let handleDoubleNo = () => {
    //     setBad("enought")
    // }

    return (
        <>
        <button className="yesButtons" onClick={handleYes} >Good</button>        
        <button className="NoButtons" onClick={handleNo} onDoubleClick={handleDoubleNo} >{bad}</button>        
        </>
    )
}

export default YesNoButtons