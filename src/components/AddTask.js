import { useState } from "react";

const AddTask = ({addTask}) => {

    const [text, setText] = useState("")
    const [date, setDate] = useState("")
    const [reminder, setReminder] = useState(false)

    const submitForm = (e) => {
        e.preventDefault()
        addTask({text, date, reminder});

        setText("")
        setDate("")
        setReminder(false)
    }

    return (
        <div className="addtask">
            <form onSubmit={submitForm}>
                <label>Task</label>
                <input 
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                />

                <label>Date</label>
                <input 
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />

                <label>Reminder</label>
                <input 
                type="checkbox"
                checked={reminder}
                value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}
                />

                <button>Save Task</button>
            </form>
        </div>
    );
}
 
export default AddTask;