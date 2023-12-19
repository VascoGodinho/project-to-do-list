import Lists from "../components/Lists.jsx";
import { useState } from "react";
import "../styling/homePage.css";
import { v4 as uuidv4 } from "uuid";

function HomePage({ taskLists, setTaskLists, addTask }) {
  return (
    <div>
      <Lists taskLists={taskLists} setTaskLists={setTaskLists} />
    </div>
  );
}

export default HomePage;
