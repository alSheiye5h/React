import { useEffect, useRef } from "react";

function Ref() {

    let display1 = useRef("block");
    let display2 = useRef("none");
    let display3 = useRef("none");
    let display4 = useRef("none");

    let choose = () => {
        let choosen = [display1, display2, display3, display4][Math.ceil(Math.random() * 4)];
        
        if (choosen.current == "none") {
            [display1, display2, display3, display4].map(e => {
                e.current == "none";
            })
            choosen.current == "block"
        } else {
            choose();
        }
    }

    useEffect(choose, [display1, display2, display3, display4])

    return (
        <div className="window" style={{height: "400px", gap: "10px"}} >
            <button className="buttonRef ref1" style={{display: display1.current}} onBlur={hide} >click me</button>
            <button className="buttonRef ref2" style={{display: display2.current}} onBlur={hide}>click me</button>
            <button className="buttonRef ref3" style={{display: display3.current}} onBlur={hide}>click me</button>
            <button className="buttonRef ref4" style={{display: display4.current}} onBlur={hide}>click me</button>
        </div>
    )

}

export default Ref