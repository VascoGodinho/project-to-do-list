import ListItem from "./ListItem";

function Lists({ taskLists, setTaskLists }) {
  function taskDelete(tasksIndex) {
    console.log("TD . " + tasksIndex);
    const updatedTaskLists = [...taskLists];
    updatedTaskLists.splice(tasksIndex, 1);
    setTaskLists(updatedTaskLists);
  }

  return (
    <div className="listItems">
      <ul>
        {taskLists.map((task, tasksIndex) => (
          <ListItem
            taskDelete={taskDelete}
            task={task}
            tasksIndex={tasksIndex}
            key={task.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default Lists;
