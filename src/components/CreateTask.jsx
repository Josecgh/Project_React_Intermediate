import "./CreateTask.css";
import { useState, useRef } from "react";
import { createId } from "../utils/utils";
import { connect } from "react-redux";


function CreateTask(props) {
  const {addTask} = props;

  const [taskTitle, setTaskTitle] = useState("");

  const newTaskInputRef = useRef();

  const handleInput = (e) => {
    setTaskTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskTitle) return;

    const newTask = {
      id: createId(),
      title: taskTitle,
      completed: false
    }

    addTask(newTask);
    setTaskTitle("");
  };

  const focus = () => {
    console.log(newTaskInputRef.current);
    newTaskInputRef.current.focus();
  }

  return (
    <form className="task-form" onSubmit={handleSubmit} onClick={focus}>
      <input
       ref={newTaskInputRef}
       type="text"
       className="task-title"
       placeholder="Nueva tarea"
       value={taskTitle}
       onChange={handleInput}
      />
    <button className="create-btn">+</button>
    </form>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (newTask) => {
      dispatch({ type: "CREATE_TASK", newTask});
    }
  }
}

export default connect(null, mapDispatchToProps)(CreateTask)