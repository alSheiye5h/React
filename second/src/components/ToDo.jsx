import { useState } from "react"


function ToDo() {

    let [task, setTask] = useState("");

    function addTask(event) {
        setTask(event.target.value)
    }

    return (
    <>
        <h1>To-Do-List</h1>
        <div className="window1">
            <input type="text" className="taskInp" value={task} onChange={addTask}/>
            <button className="taskBtn">add</button>
        </div>
        <div className="window1">
            <div className="taskArea">
                <p>any task for test</p>
                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>
    </>
    )




}

export default ToDo