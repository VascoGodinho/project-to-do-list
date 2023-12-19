import { Link, useParams } from "react-router-dom";
import Lists from "./Lists";

function ListItem({ task, tasksIndex, taskDelete, taskSwitchComplete }) {
  return (
    <li>
      <p>
        This task is
        {task.completed === true ? (
          <span> completed: {task.task}</span>
        ) : task.completed === false ? (
          <span> not completed: {task.task}</span>
        ) : undefined}{" "}
      </p>{" "}
      <Link to={`/itemdetails/${task.id}`}>
        <button type="button"> View Details </button>
      </Link>
      {/* <button onSubmit={() => handleDelete(key)} type="button">
          Delete
        </button> */}
      <button onClick={() => taskDelete(tasksIndex)} type="button">
        Delete
      </button>
      <input
        type="checkbox"
        checked={task.completed}
        onClick={() => taskSwitchComplete(tasksIndex)}
        text="complete"
      />
    </li>
  );
}

export default ListItem;
