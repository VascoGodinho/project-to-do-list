import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ItemDetails from "./pages/ItemDetails.jsx";
import "./styling/listItem.css";

function App() {
  return (
    <div>
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="listItems">
        {/* <Lists /> */}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/itemdetails/:itemId" element={<ItemDetails />}></Route>
          <Route path="/AboutPage" element={<AboutPage />}></Route>
          <Route path="*" element={<h1>Error 404</h1>}></Route>
        </Routes>
      </div>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
