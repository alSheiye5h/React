

function FavCar() {

    let [car, setCar] = useState({
        year: 2024,
        model: "mercedes G63",
        color: "black",
    });


    let changeCar = (event, t) => {
        if (t == 1) 
            setCar(car.model = event.target.value)
    } 

    return (
        <div className="window" style={{width: "fit-content"}}>
            <p>Your Favourite Car is a {car.color} {car.model} of year {car.year}</p>
            <input type="text" className="carInp" onChange={(event) => {changeCar(event,1)}} />
            <input type="text" className="carInp" onChange={(event) => {changeCar(event,2)}} />
            <input type="text" className="carInp" onChange={(event) => {changeCar(event,3)}} />
        </div>
    )
}

export default FavCar