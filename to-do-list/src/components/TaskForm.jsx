import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleTaskSubmit = (event) => {
    event.preventDefault();
    if (taskText.trim() === "") {
      return;
    }

    const id = uuidv4();

    const newTask = {
      id: id,
      task: taskText,
      completed: false,
    };

    addTask(newTask);

    setTaskText("");
  };

  return (
    <div>
      <h3> Add Task </h3>
      <form onSubmit={handleTaskSubmit}>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter your task"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TaskForm;
