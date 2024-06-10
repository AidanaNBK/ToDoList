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

  function handleSelect(elemId) {
    setProjectState((oldState) => {
      return {
        ...oldState,
        selectedProject: elemId,
      };
    });
  }

  function updateList(project) {
    const idElem = Math.random().toFixed(4) * 10000;
    const newProject = {
      ...project,
      id: idElem,
    };
    setProjectState((oldState) => {
      return {
        ...oldState,
        selectedProject: idElem,
        // projects: oldState.projects.concat(project), <-- alternative
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

  function handleDelete(id) {
    console.log(id);
    setProjectState((oldState) => {
      return {
        ...oldState,
        selectedProject: undefined,
        projects: oldState.projects.splice(id, 1),
      };
    });
  }

  function handleTasksUpdate(data, id) {
    // console.log(data, id);
    setProjectState((oldState) => {
      let tasks = [...oldState.projects[id].tasks, data];
      let projectsNew = [...oldState.projects];
      projectsNew[id].tasks = tasks;
      return {
        ...oldState,
        projects: projectsNew,
      };
    });
  }
  function handleDeleteTask(idElem, id) {
    setProjectState((oldState) => {
      oldState.projects[idElem].tasks.splice(id, 1);
      let projectsNew = [...oldState.projects];
      // projectsNew[id].tasks = tasks;
      return {
        ...oldState,
        projects: projectsNew,
      };
    });
    // console.log(projectState.projects[idElem], id);
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
    let dataId = projectState.projects.findIndex(
      (elem) => elem.id === projectState.selectedProject
    );
    content = (
      <Project
        deleteElem={(id) => handleDelete(id)}
        id={dataId}
        projectState={projectState}
        updateTasks={(data, id) => handleTasksUpdate(data, id)}
        deleteTask={(idElem, id) => handleDeleteTask(idElem, id)}
      ></Project>
    );
  }
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar
          projectState={projectState}
          createClick={handleCreateNew}
          selectClick={(id) => handleSelect(id)}
          selectedId={projectState.selectedProject}
        ></SideBar>
        {content}
      </main>
    </>
  );
}

export default App;
