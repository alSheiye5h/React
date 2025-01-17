import { useState } from "react";


function FoodList() {

    let [foods, setFoods] = useState(["apple", "banana", "orange"])
    let [food, setFood] = useState("")

    let foodsHtml = foods.map(e => <li key={e} >{e}</li>)

    let foodInpChange = (event) => {
        setFood(event.target.value)
    }

    let addFood = (event) => {
        setFoods(f => f.push(food))
    }


    return (
        <div className="window" >
            <p>Foods :</p>
            <ul>
                {foodsHtml}
            </ul>
            <input type="text" className="" value={food} onChange={foodInpChange}/>
            <button className="" onClick={addFood} >add food</button>
        </div>
    )
}

export default FoodList