import Tasks from "../assets/tasks.json";
import { useState } from "react";
import ListItem from "./ListItem";

function Lists() {
  const [taskLists, setTaskLists] = useState(Tasks);
  const taskDelete = (tasksIndex) => {
    const updatedTaskLists = [...taskLists];
    updatedTaskLists.splice(tasksIndex, 1);
    setTaskLists(updatedTaskLists);
  };

  return (
    <ul>
      {taskLists.map((task, tasksIndex) => (
        <ListItem
          handleDelete={taskDelete}
          task={task}
          tasksIndex={tasksIndex}
          key={tasksIndex}
        />
      ))}
    </ul>
  );
}
export default Lists;
