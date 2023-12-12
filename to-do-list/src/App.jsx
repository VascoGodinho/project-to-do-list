import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Sidebar from './components/Sidebar.jsx'
import Tasks from './assets/tasks.json'
import { useState} from "react"

function App() {
  const [taskLists, setTaskLists]=useState(Tasks)
  const taskDelete= (tasksIndex) => {
    const updatedTaskLists = [taskLists, setTaskLists];
    updatedTaskLists.splice(tasksIndex, 1);
    setTaskLists(updatedTaskLists);
  }
  
  
  
  
  return (
    <div className='Navbar'>
      <Navbar />
      <Sidebar />
     <ul>
      {Tasks.map((task, tasksIndex) =>
      <li key={tasksIndex}>
      {task.completed === true ? (<p>This task is completed: {task.task}</p>)
    : task.completed === false ? (<p>This task is not completed: {task.task}</p>) : (<p>Invalid value</p>)}  {/* verify if the condition is true or false when there isn't boolean value task.completed !== boolean && task.completed */}
    <button onClick={() => taskDelete(task)} type='button'>Delete</button>
    </li>
 
      )}
    </ul>   
     
     
      <Footer />
     </div>
  )


   
}

export default App
