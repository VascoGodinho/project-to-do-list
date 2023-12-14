import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <p>
        {" "}
        <Link to="/">Home</Link>
      </p>
      <p>
        {" "}
        <Link to="/AboutPage">About Us</Link>
      </p>
    </div>
  );
}

export default Sidebar;
