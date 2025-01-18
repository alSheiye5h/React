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
                <p className="taskP">any task for test</p>
                <button className="taskDel">delete</button>
                <button className="taskUp">☝️</button>
                <button className="taskDown">👇</button>
            </div>
        </div>
    </>
    )
}

export default ToDo