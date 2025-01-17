import { useState } from "react";

function FavCar() {

    let [car, setCar] = useState({
        year: 2024,
        model: "mercedes G63",
        color: "black",
    });

    function changeCarModel(event) {
        setCar(c => ({...c, model: event.target.value}))
    }

    function changeCarColor(event) {
        setCar(c => ({...c, color: event.target.value}))
    }

    function changeCarYear(event) {
        setCar(c => ({...c, year: event.target.year}))
    }

    return (
        <div className="window" style={{ width: "fit-content" }}>
            <p>Your Favourite Car is a {car.color} {car.model} of year {car.year}</p>
            <input 
                type="text" 
                value={car.model} 
                className="carInp" 
                onChange={changeCarModel} 
                placeholder="Model"
            />
            <input 
                type="text" 
                value={car.color} 
                className="carInp" 
                onChange={changeCarColor} 
                placeholder="Color"
            />
            <input 
                type="number"
                value={car.year}
                className="carInp"
                onChange={changeCarYear} 
                placeholder="Year"
            />
        </div>
    );
}

export default FavCar