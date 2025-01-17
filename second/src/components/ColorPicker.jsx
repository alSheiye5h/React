import { useState } from "react"




function ColorPicker() {

    let [color, setColor] = useState("#FFFFFF");

    let changeColor = (event) => {
        setColor(event.target.value)
    }

    return (        
    <div className="window" >
        <div className="colorBoard" style={{backgroundColor: color, borderColor: color}}>

        </div>
        <br />
        <input type="color" className="colorInp" onChange={changeColor}/>
        <p>{color}</p>
    </div>
    )
}

export default ColorPicker