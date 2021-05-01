const Navbar = ({addBtn}) => {
    return (
        <div className="navbar">
            <h2>Task Tracker</h2>
            <button onClick={addBtn}>Add Task</button>
        </div>
    );
}
 
export default Navbar;