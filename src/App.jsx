import SideBar from "./components/SideBar.jsx";
import Default from "./components/Default.jsx";
import NewProject from "./components/NewProject.jsx";
import Project from "./components/Project.jsx";

import { useState } from "react";
function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    // undefined - default, null -creating new, id in case of selected
    projects: [],
    // Each project is an object with the following properties: title, description, due date, array of tasks, id
  });

  function updateList(project) {
    const newProject = {
      ...project,
      id: Math.random().toFixed(4) * 10000,
    };
    setProjectState((oldState) => {
      return {
        ...oldState,
        selectedProject: undefined,
        // projects: oldState.projects.concat(project),
        projects: [...oldState.projects, newProject],
      };
    });
  }
  function handleCreateNew() {
    setProjectState((oldState) => {
      return {
        ...oldState,
        selectedProject: null,
      };
    });
  }
  function handleCancel() {
    setProjectState((oldState) => {
      return {
        ...oldState,
        selectedProject: undefined,
      };
    });
  }
  let content;
  if (projectState.selectedProject === null) {
    content = (
      <NewProject
        saveClick={updateList}
        cancelClick={handleCancel}
      ></NewProject>
    );
  } else if (projectState.selectedProject === undefined) {
    content = <Default createClick={handleCreateNew}></Default>;
  } else {
    content = <Project></Project>;
  }
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar
          projectState={projectState}
          createClick={handleCreateNew}
        ></SideBar>
        {content}
      </main>
      {/* <button
        onClick={() => {
          console.log(projectState);
        }}
      >
        Check data
      </button> */}
    </>
  );
}

export default App;
