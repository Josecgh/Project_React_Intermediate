import { createContext, useState } from "react";

const TaskContext = createContext();

function TaskProviderWrapper(props) {
  const [tasks, setTasks] = useState([]);

  const [hasLoaded, setLoaded] = useState(false);
  const [hasError, setError] = useState(false);

  const API_URL = "https://ca8619520e648834e47d.free.beeceptor.com/api/tasks/";

  const getTasks = async () => {
    if (hasLoaded) return;

    try {
      console.log("Get tasks");
      const response = await fetch(API_URL);
      const data = await response.json();
      setTasks(data);
      setLoaded(true);
      setError(false);
    } catch (e) {
      setError(true);
    }
  }

  const addTask = async (newTask) => {
    try {
      await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(newTask)
      })
      setTasks([newTask, ...tasks])
      setError(false);
    } catch (e) {
      setError(true);
    }
  }

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id !== updatedTask.id) return task;
      return updatedTask;
    })

    setTasks(updatedTasks)
  }

  return (
    <TaskContext.Provider
     value={{
      tasks,
      setTasks,
      addTask,
      updateTask,
      getTasks,
      hasLoaded,
      hasError
     }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export { TaskContext, TaskProviderWrapper };