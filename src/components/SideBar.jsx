function SideBar({ selectClick, projectState, createClick, selectedId }) {
  // probably to make button disabled it's better to use Ref in future?
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-100">
        Your Projects
      </h2>
      <button
        onClick={createClick}
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      >
        + Add Project
      </button>
      {projectState.projects.length > 0 && (
        <ul className="mt-6 flex flex-col gap-3">
          {projectState.projects.map((elem) => {
            // console.log(selectedId, elem.id);
            let classVal = "w-full rounded-md";
            if (elem.id === selectedId) {
              classVal += " bg-stone-800 text-stone-600";
            } else {
              classVal += " text-stone-400";
            }

            return (
              <li className={classVal} key={elem.id}>
                <button
                  onClick={() => selectClick(elem.id)}
                  className="w-full h-full text-left text-stone-600 hover:text-stone-300 hover:bg-stone-700 py-1 px-4 rounded"
                >
                  {elem.title}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </aside>
  );
}

export default SideBar;
