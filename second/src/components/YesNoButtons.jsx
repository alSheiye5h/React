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

    let [goods, setGoods] = useState(0);
    let [bads, setBads] = useState(0);

    let incrementG = () => {
        setGoods(goods + 1);
    }

    let incrementB = () => {
        setBads(bads + 1);
    }


    return (
        <>
        <button className="yesButtons" onClick={incrementG} >Good</button>   
        <p className="counts">{goods}</p>
        <p className="counts">{bads}</p>     
        <button className="NoButtons" onClick={incrementB} >Bad</button>        
        </>
    )
}

export default YesNoButtons