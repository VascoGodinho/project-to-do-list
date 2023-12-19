import ListItem from "./ListItem";
import { useNavigate } from "react-router-dom";
import TaskForm from "./TaskForm";

function Lists({ taskLists, setTaskLists }) {
  /* let [taskLists, setTaskLists] = useState([]); */
  const navigate = useNavigate();

  function taskDelete(tasksIndex) {
    console.log("TD . " + tasksIndex);
    const updatedTaskLists = [...taskLists];
    updatedTaskLists.splice(tasksIndex, 1);
    setTaskLists(updatedTaskLists);
  }

  function taskSwitchComplete(tasksIndex) {
    let selectedTask = taskLists[tasksIndex];
    // console.log(selectedTask);
    selectedTask.completed = !selectedTask.completed;
    setTaskLists(taskLists);
    navigate("/");
  }

  const addTask = (newTask) => {
    // console.log(newTask);
    const updatedTaskLists = [...taskLists];
    updatedTaskLists.push(newTask);
    // console.log(updatedTaskLists);
    setTaskLists(updatedTaskLists);
    navigate("/");
  };

  return (
    <div>
      <TaskForm addTask={addTask} />
      <div className="listItems">
        <ul>
          {taskLists.map((task, tasksIndex) => (
            <ListItem
              taskDelete={taskDelete}
              taskSwitchComplete={taskSwitchComplete}
              task={task}
              tasksIndex={tasksIndex}
              key={task.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Lists;
