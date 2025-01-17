import { useState } from "react";

function FavCar() {


    let [car, setCar] = useState({
        model: "BMW M3",
        color: "black",
        year: 2024,
    });

    function setCarModel(event) {
        setCar(c => ({...c, model: event.target.value}));
    }

    function setCarColor(event) {
        setCar(c => ({...c, color: event.target.value}))
    }

    function setCarYear(event) {
        setCar(c => ({...c, year: event.target.value}))
    }

    return(
        <div className="window" style={{width: "fit-content"}}>
            <h3>Favourite Car :</h3>
            <p>-- model: {car.model}</p>
            <p>-- color: {car.color}</p>
            <p>-- year: {car.year}</p>     
            <hr style={{width: "100%"}}/>
            <hr style={{width: "100%"}}/>
            <input type="text" value={car.model} className="carInp" onChange={setCarModel}/>
            <input type="text" value={car.color} className="carInp" onChange={setCarColor}/>
            <input type="text" value={car.year} className="carInp" onChange={setCarYear}/>
        </div>
    )
}

export default FavCar