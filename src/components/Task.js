const Task = ({tasks, deleteTask, reminder}) => {
    return (
        <div className="task">
            {tasks.map(task => (
                <div className={`taskBody ${task.reminder ? "rem" : task}`}
                 key={task.id} onDoubleClick={() => reminder(task.id)}>
                    <h3> {task.text} </h3>
                    <p> {task.date} </p>
                    <button onClick={() => deleteTask(task.id)} >Delete task</button>
                </div>
            ))}
        </div>
    );
}
 
export default Task;