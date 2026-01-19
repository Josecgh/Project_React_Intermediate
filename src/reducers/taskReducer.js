const initState = {
  tasks: [
    {
      id: "1",
      title: "Comprar la cena",
      completed: false,
    },
    {
      id: "2",
      title: "Cocinar",
      completed: false,
    },
    {
      id: "3",
      title: "Cenar",
      completed: false,
    },
    {
      id: "4",
      title: "Fregar los cacharros",
      completed: false,
    },
  ],
  hasLoaded: true,
  hasError: false,
}

const taskReducer = (state = initState, action) => {
  console.log(action);
  if(action.type === "CREATE_TASK") {
    const updatedTasks = [action.newTask, ...state.tasks];
    return {
      ...state,
      tasks: updatedTasks,
    }
  } else if (action.type === "UPDATE_TASK") {
    const updatedTasks = state.tasks.map((task) => {
      if(task.id === action.updatedTask.id) return action.updatedTask;
      return task;
    })
    return {
      ...state,
      tasks: updatedTasks,
    }
  }
  return state;
};

export default taskReducer;