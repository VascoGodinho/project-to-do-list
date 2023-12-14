import logo from "../assets/notebookLogo.png";
import "../styling/navbarStyle.css";

function Navbar() {
  return (
    <div className="navbarContainer">
      <h1>To do list</h1>
      <img src={logo} alt="To do list Logo" />
    </div>
  );
}

export default Navbar;
