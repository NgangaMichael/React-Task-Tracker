import Task from "./Task"

const Tasks = ({tasks, deleteTask, reminder}) => {


    return (
        <div className="tasks">
            <Task 
            tasks={tasks}
            deleteTask={deleteTask}
            reminder={reminder}
            />
        </div>
    );
}
 
export default Tasks;