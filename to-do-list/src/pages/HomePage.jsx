import Lists from "../components/Lists.jsx";
import "../styling/homePage.css";

function HomePage() {
  /*   const handleSubmit = (event) =>
  event.preventDefault();
} */
  return (
    <div>
      <h3>Tasks</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter task" />
        <button type="submit">Add</button>
      </form>
      <Lists />
    </div>
  );
}

export default HomePage;
