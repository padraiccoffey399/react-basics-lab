const Task = (props) => {

    const priorityColors = {
    low: "#28a745",    // Green
    medium: "#fd7e14", // Orange
    high: "#dc3545"    // Red
  };

    const priorityKey = props.priority ? props.priority.toLowerCase() : "low";
    const backgroundColor = priorityColors[priorityKey] || "#28a745";

    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
        

            <p className="title"> {props.title} </p>
            <p>Due : {props.deadline}</p>
            <p className="description">{props.description}</p>
            <p className="priority" style={{backgroundColor: backgroundColor}} > <b>{props.priority}</b></p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>


        </div>
    )
    
}

export default Task;