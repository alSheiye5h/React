import { useState } from "react";

function FoodList() {

    let [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);

    let [food, setFood] = useState("");


    function changeFood(event) {
        setFood(event.target.value)
    }

    function addFood() {
        if (food.trim("") !== "") {
            setFoods(f => [...f, food]);
            setFood("");
        }
    }

    let foodsHtml = foods.map((e, index) => <li key={index} >{e}</li>);

    return (
        <div className="window" >
            <p>Favourite Foods :</p>
            <ul>
                {foodsHtml}
            </ul>
            <br />
            <input type="text" className="finp" value={food} onChange={changeFood} /><br />
            <button className="fbtn" onClick={addFood} >add food</button>

        
        </div>
    )

}















export default FoodList






































// function FoodList() {

//     let [foods, setFoods] = useState(["apple", "banana", "orange"])
//     let [food, setFood] = useState("")

//     let foodsHtml = foods.map((e, index) => <li key={index} >{e}</li>)

//     let foodInpChange = (event) => {
//         setFood(event.target.value)
//     }

//     let addFood = () => {
//         if (food.trim("") !== "") {
//             setFoods(f => [...f, food]);
//             setFood("");
//         }

//     }


//     return (
//         <div className="window" >
//             <p>Foods :</p>
//             <ul>
//                 {foodsHtml}
//             </ul>
//             <input type="text" className="finp" value={food} onChange={foodInpChange}/>
//             <br />
//             <button className="fbtn" onClick={addFood} >add food</button>
//         </div>
//     )
// }
