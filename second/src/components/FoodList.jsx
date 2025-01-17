import { useState } from "react";


function FoodList() {

    let [foods, setFoods] = useState(["apple", "banana", "orange"])

    let foodsHtml = foods.map(e => <li key={e} >{e}</li>)


    return (
        <div className="window" style={{width: "fit-content"}}>
            <p>Foods :</p>
            <ul>
                {foodsHtml}
            </ul>
        </div>
    )
}

export default FoodList