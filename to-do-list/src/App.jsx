import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";

import { Route, Router } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

function App() {
  return (
    <div>
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="pages">
        {/* <Lists /> */}
        {/* <Router>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/itemdetails" element={<p>items</p>}></Route>
          <Route path="/AboutUs" element={<AboutPage />}></Route>
          <Route path="*" element={<h1>Error 404</h1>}></Route>
        </Router>
        <Sidebar />
        <Footer /> */}
      </div>
    </div>
  );
}

export default App;
