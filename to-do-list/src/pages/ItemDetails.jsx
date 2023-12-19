import Tasks from "../assets/tasks.json";
import { useNavigate, useParams } from "react-router-dom";

function ItemDetails({ taskLists, setTaskLists }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = taskLists.find((task) => task.id == id);

  const taskDelete = (taskId) => {
    console.log("TE . " + taskId);
    const filter = taskLists.filter((element) => {
      if (element.id != id) {
        return true;
      }
    });
    setTaskLists(filter);
    navigate("/");
  };

  /*  console.log(selectedTask); */
  const selectedTask = Tasks[id];
  console.log(selectedTask);
  return (
    <>
      {" "}
      {task ? (
        <div>
          <h1> {task.task} </h1>
          <button onClick={() => taskDelete(id)}> Delete </button>
        </div>
      ) : undefined}
    </>
  );
}

export default ItemDetails;
