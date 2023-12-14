import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Lists from "./components/Lists.jsx";
import { Route, Router } from "react-router-dom";
import { ReactDOM } from "react-dom";

function App() {
  return (
    <div className="Navbar">
      <Navbar />

      <div className="pages">
        <Router>
          <Route path="/" element={<Lists />} />
        </Router>
      </div>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
