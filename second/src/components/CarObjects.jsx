import { useState } from "react"


function CarObjects() {

    let [carList, setCarList] = useState([
        {
            year: 2024,
            model: "mercedes G63",
            color: "red",
        },
        {
            year: 2008,
            model: "BMW M3",
            color: "red",
        }
    ])

    let [carObj, setCarObj] = useState({
        year: "",
        color: "",
        model: "",
    });

    let [carColor, setCarColor] = useState("");
    let [carYear, setCarYear] = useState("");
    let [carModel, setCarModel] = useState("");

    function changeModel(event) {
        setCarObj((prev) => ({ ...prev, model: event.target.value }))
    }

    function changeYear(event) {
        setCarObj((prev) => ({ ...prev, year: event.target.value }))
    }

    function changeColor(event) {
        setCarObj((prev) => ({ ...prev, color: event.target.value }))
    }
    
    function addCar() {
        const { year, color, model } = carObj;

        if (model.trim() && color.trim() && year.trim() && !isNaN(year)) {
            setCarList((prevList) => [...prevList, carObj]);
            setCarObj({ year: "", color: "", model: "" }); 
        } else if (isNaN(year)) {
            alert("year need to be a number");
        } else {
            alert("Please fill out all fields correctly.");
        }
    }

    let cars = carList.map((c, index) => <li key={index}>{c.year} {c.model} {c.color}</li>)
    return (
    <div className="window">
        <p>List of car objects :</p>
        <ul>
            {cars}
        </ul>
        <br />
        <label htmlFor="">model :</label>
        <input type="text" className="" value={carObj.model} onChange={changeModel} />
        <label htmlFor="">year :</label>
        <input type="text" className="" value={carObj.year} onChange={changeYear} />
        <label htmlFor="">color :</label>
        <input type="text" className="" value={carObj.color} onChange={changeColor} />
        <br />
        <button onClick={addCar} >add car</button>
    </div>
    )
}

export default CarObjects