import { useState } from "react"


function ToDo() {

    let [task, setTask] = useState("");
    let [tasks, setTasks] = useState([]);
    
    function addTask(event) {
        setTask(event.target.value);
    }

    function pushTask() {
        if (task.trim() !== "") {
            setTasks(t => ([...t, task]))
            setTask("");
        } else {
            alert("can't post empty task .")
        }
    }

    function delTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    function modifyOrder(index, opt) {
        setTasks((prevTasks) => {
            const tasks = [...prevTasks];
            if (opt === 1 && index > 0) {
                // Move task up
                [tasks[index], tasks[index - 1]] = [tasks[index - 1], tasks[index]];
            } else if (opt === 0 && index < tasks.length - 1) {
                // Move task down
                [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]];
            }
            return tasks;
        });
    }


    let tasksRender = tasks.map((task, index) => {
        return (<div key={index} className="window1">
            <div className="taskArea">
                <p className="taskP">{task}</p>
                <button className="taskDel" onClick={() => delTask(index)}>delete</button>
                <button className="taskUp" onClick={() => modifyOrder(index, 1)} >☝️</button>
                <button className="taskDown" onClick={() => modifyOrder(index, 0)}>👇</button>
            </div>
        </div>)
    })

    return (
    <>
        <h1>To-Do-List</h1>
        <div className="window1">
            <input type="text" className="taskInp" value={task} onChange={addTask}/>
            <button className="taskBtn" onClick={pushTask}>add</button>
        </div>
        {tasksRender}
    </>
    )
}

export default ToDo
