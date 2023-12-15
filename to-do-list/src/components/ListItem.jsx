import Tasks from "../assets/tasks.json";
import { Link } from "react-router-dom";

const ListItem = ({ handleDelete, task, tasksIndex }) => {
  return (
    <div>
      <li key={tasksIndex}>
        <p>
          This task is
          {task.completed === true ? (
            <span> completed: {task.task}</span>
          ) : task.completed === false ? (
            <span>not completed: {task.task}</span>
          ) : undefined}{" "}
        </p>{" "}
        <Link to={`/itemdetails/${tasksIndex}`}>
          <button type="button"> View Details </button>
        </Link>
        {/* verify if the condition is true or false when there isn't boolean value task.completed !== boolean && task.completed */}
        <button onSubmit={() => handleDelete(tasksIndex)} type="button">
          Delete
        </button>
      </li>
    </div>
  );
};

export default ListItem;
