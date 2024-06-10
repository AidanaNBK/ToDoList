import Tasks from "./Tasks.jsx";
import { useRef } from "react";
export default function Project({ id, projectState, deleteElem }) {
  const taskAdd = useRef();
  const formattedDate = new Date(
    projectState.projects[id].date
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-1/2 mr-10 mt-[3rem]">
      <header className="pb-4 mb-4 border-b-2 border-stone-400">
        <div className="flex flex-row justify-between mb-6">
          <h1 className="font-bold text-4xl text-stone-700">
            {projectState.projects[id].title}
          </h1>
          <button
            onClick={() => deleteElem(id)}
            className="text-stone-400 hover:text-stone-700"
          >
            Delete
          </button>
        </div>
        <p className="text-stone-300 mb-2">{formattedDate}</p>
        <p className="text-stone-500 whitespace-pre-wrap">
          {projectState.projects[id].description}
        </p>
      </header>
      <div>
        <h1 className="font-bold text-3xl text-stone-700 mb-4">Tasks</h1>
        <form className="flex justify-between mb-4">
          <input
            className="w-[15rem] h-[2rem] rounded-md focus:bg-stone-200 px-4"
            ref={taskAdd}
            type="text"
          ></input>
          <button
            className="text-stone-800 hover:text-stone-300 bg-stone-400 hover:bg-stone-700 py-1 px-2 rounded-md"
            method="form"
            onClick={(event) => {
              event.preventDefault();
              console.log(taskAdd.current.value);
            }}
          >
            Add task
          </button>
        </form>
        <Tasks tasksList={projectState.projects[id].tasks}></Tasks>
      </div>
    </div>
  );
}
// Tailwind: whitespace-pre-wrap <- takes into account wite space of the text
