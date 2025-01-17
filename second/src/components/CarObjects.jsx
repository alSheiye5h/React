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

    let [carObj, setCarObj] = useState({});

    let [carColor, setCarColor] = useState("");
    let [carYear, setCarYear] = useState("");
    let [carModel, setCarModel] = useState("");

    let cars = carList.map(c => <li>{c.year} {c.model} {c.color}</li>)
    return (
    <div className="window">
        <p>List of car objects :</p>
        <ul>
            {cars}
        </ul>
        <br />
        <label htmlFor="">model :</label>
        <input type="text" className="" value={carModel} onChange={setCarColor} />
        <label htmlFor="">year :</label>
        <input type="text" className="" value={carYear} />
        <label htmlFor="">color :</label>
        <input type="text" className="" value={carColor} />
    </div>
    )
}

export default CarObjects