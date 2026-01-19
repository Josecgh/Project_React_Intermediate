import { useEffect, useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import TaskCard from '../components/TaskCard';
import CreateTask from '../components/CreateTask';
import "./TasksPage.css"
import { connect } from 'react-redux';

function TasksPage(props) {
  const { tasks, hasLoaded, hasError} = props;

  const useCounter = () => {
    const [counter, setCounter] = useState(1);

    const increase = () => setCounter(counter + 1);
    const decrease = () => setCounter(counter - 1);

    return { counter, increase, decrease };
  };

  const taskCounter = useCounter();
  const completedCounter = useCounter();

  const taskCards = tasks.map((task) => (
    <li key={task.id}>
      <TaskCard task={task}></TaskCard>
    </li>
  ));

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <section id='tasks-page'>
        <h2 className='title'>Tasks</h2>

        <div className="counters">
          <div className="counter">
            <h3 className="counter-title">Tareas</h3>
            <div className="btns">
              <button onClick={taskCounter.decrease}>-</button>
              <h3>{taskCounter.counter}</h3>
              <button onClick={taskCounter.increase}>+</button>
            </div>
          </div>
          <div className="counter">
            <h3 className="counter-title">Completadas</h3>
            <div className="btns">
              <button onClick={completedCounter.decrease}>-</button>
              <h3>{completedCounter.counter}</h3>
              <button onClick={completedCounter.increase}>+</button>
            </div>
          </div>
        </div>    

        <ul className="task-list">
          <li>
            <CreateTask></CreateTask>
          </li>
          {hasError ? (
            <h2 data-testid="error-msg">No se han podido obtener las tareas</h2>
          ) : !hasLoaded ? (
            <h2 data-testid="loading-msg">Cargando...</h2>
          ) : (
            taskCards
          )}
        </ul>
      </section>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    hasError: state.hasError,
    hasLoaded: state.hasLoaded,
  }
}


export default connect(mapStateToProps)(TasksPage);