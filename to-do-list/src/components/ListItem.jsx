import Tasks from "../assets/tasks.json";

const ListItem = ({ handleDelete, task, tasksIndex }) => {
  return (
    <li key={tasksIndex}>
      <p>
        This task is
        {task.completed === true ? (
          <span> completed: {task.task}</span>
        ) : task.completed === false ? (
          <span>not completed: {task.task}</span>
        ) : undefined}{" "}
      </p>{" "}
      {/* verify if the condition is true or false when there isn't boolean value task.completed !== boolean && task.completed */}
      <button onClick={() => handleDelete(tasksIndex)} type="button">
        Delete
      </button>
    </li>
  );
};

export default ListItem;
