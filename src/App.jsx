import SideBar from "./components/SideBar.jsx";
import Default from "./components/Default.jsx";
import NewProject from "./components/NewProject.jsx";

import { useState } from "react";
function App() {
  const [projects, setProjects] = useState([]);
  const [buttonState, setButtonState] = useState(false);
  function handleProjects(event) {
    console.log(event);
    setProjects((projectList) => {
      projectList.push(event.target.value);
    });
  }
  function handleButtonState(state) {
    console.log("start of the new Project");
    setButtonState(state);
  }
  /* 
  Each project is an object with the following properties:
  - title, description, due date
  - array of tasks
  */
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        projects={projects}
        onClick={() => handleButtonState(true)}
      ></SideBar>
      {buttonState ? (
        <NewProject></NewProject>
      ) : (
        <Default onClick={() => handleButtonState(true)}></Default>
      )}
    </main>
  );
}

export default App;
