import { useRef } from "react";
export default function Project({ id, projectState }) {
  return (
    <div className="w-1/2 mr-10 mt-[3rem]">
      <div className="flex flex-row justify-between">
        <h1 className="font-bold text-4xl text-stone-700">
          {projectState.projects[id].title}
        </h1>
        <button className="text-stone-400 hover:text-stone-700">Delete</button>
      </div>
      <p>{projectState.projects[id].date}</p>
      <p>{projectState.projects[id].description}</p>
      <h1>Tasks</h1>
      <form>
        <input></input>
        <button>Add task</button>
      </form>
    </div>
  );
}
