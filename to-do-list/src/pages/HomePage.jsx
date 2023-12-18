import Lists from "../components/Lists.jsx";
import "../styling/homePage.css";

function HomePage({ taskLists, setTaskLists }) {
  /*   const handleSubmit = (event) =>
  event.preventDefault();
} */
  return (
    <div>
      <h3>Tasks</h3>
      <form>
        <input type="text" placeholder="Enter task" />
        <button type="submit">Add</button>
      </form>
      <Lists taskLists={taskLists} setTaskLists={setTaskLists} />
    </div>
  );
}

export default HomePage;
