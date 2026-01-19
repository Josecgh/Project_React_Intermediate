import { connect } from "react-redux";
import "./TaskCard.css";

function TaskCard({task, updateTask}) {
  const handleInput = (e) => {
    const updatedTask = {...task, title: e.target.value};
    updateTask(updatedTask);
  };

  const handleCheck = (e) => {
    const updatedTask = {...task, completed: !task.completed};
    updateTask(updatedTask);
  };

  return (
    <article className="task-card">
      <input className="card-title" value={task.title} onChange={handleInput} />
      <input type="checkbox" checked={task.completed} onChange={handleCheck} />
    </article>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTask: (updatedTask) => {
      dispatch({ type: "UPDATE_TASK", updatedTask})
    }
  }
}

export default connect(null, mapDispatchToProps)(TaskCard)