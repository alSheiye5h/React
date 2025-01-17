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
        year: 1000,
        color: "",
        model: ""
    });

    let [carColor, setCarColor] = useState("");
    let [carYear, setCarYear] = useState("");
    let [carModel, setCarModel] = useState("");

    function changeModel(event) {
        setCarModel(event.target.value)
    }

    function changeYear(event) {
        setCarYear(event.target.value)
    }

    function changeColor(event) {
        setCarColor(event.target.value)
    }


    function carElements() {
        setCarObj(o => ({...o,
            year: carYear,
            color: carColor,
            model: carModel
        }))
    }
    

    function addCar(event) {
        if (carColor.length > 0 || carYear.length != 0 || carModel.length > 0) {
            carElements();
            setCarList(arr => [...arr, carObj]);
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
        <input type="text" className="" value={carModel} onChange={changeModel} />
        <label htmlFor="">year :</label>
        <input type="text" className="" value={carYear} onChange={changeYear} />
        <label htmlFor="">color :</label>
        <input type="text" className="" value={carColor} onChange={changeColor} />
        <br />
        <button onClick={addCar} >add car</button>
    </div>
    )
}

export default CarObjects