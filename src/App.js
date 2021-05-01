import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Navbar from "./components/Navbar"
import Tasks from "./components/Tasks";

const App = () => {

    const [addBtn, setAddbtn] = useState(false)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const firstRender = async() => {
            const tasks = await fetchData()
            setTasks(tasks)
        }

        firstRender()
    }, [])

    const fetchData = async () => {
        const res = await fetch("http://localhost:5000/tasks")
        const data = await res.json()
        return data
    }

    const fetchTask = async (id) => {
        const res = await fetch("http://localhost:5000/tasks/"+id)
        const data = await res.json()
        return data
    }

    const addTask = async (task) => {
        const res = await fetch("http://localhost:5000/tasks", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(task)
        })
        const data = await res.json()
        const newTask = {...task, data}
        setTasks([...tasks, newTask])
    }

    const reminder = async (id) => {
        const task = await fetchTask(id)
        const updTask = {...task, reminder: !task.reminder}

        const res = await fetch("http://localhost:5000/tasks/"+id, {
            method: "PUT",
            headers: {"Content-type": "Application/json"},
            body: JSON.stringify(updTask)
        })
        const data = await res.json()
        setTasks(tasks.map(task => task.id === id ? 
            {...task, reminder: data.reminder} : task))
    }

    const deleteTask = (id) => {
        fetch("http://localhost:5000/tasks/"+id, {
            method: "DELETE"
        })
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <div className="App">
            <Navbar addBtn={() => setAddbtn(!addBtn)} /> <br/>
            {addBtn && <AddTask addTask={addTask} />}
            <Tasks tasks={tasks} 
            deleteTask={deleteTask} reminder={reminder} />
        </div>
    );
}
 
export default App;