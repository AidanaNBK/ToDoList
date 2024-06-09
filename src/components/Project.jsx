// import { useRef } from "react";
export default function Project({ id, projectState }) {
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
          <button className="text-stone-400 hover:text-stone-700">
            Delete
          </button>
        </div>
        <p className="text-stone-300 mb-2">{formattedDate}</p>
        <p className="text-stone-500 whitespace-pre-wrap">
          {projectState.projects[id].description}
        </p>
      </header>
      <div>
        <h1 className="font-bold text-3xl text-stone-700">Tasks</h1>
        <form>
          <input></input>
          <button>Add task</button>
        </form>
      </div>
    </div>
  );
}
// Tailwind: whitespace-pre-wrap <- takes into account wite space of the text
