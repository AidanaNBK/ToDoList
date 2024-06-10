export default function Tasks({ idElem, tasksList, deleteTask, ...props }) {
  //   console.log(tasksList);
  let content = (
    <p className="text-center text-stone-400">The tasks list is empty now :)</p>
  );
  if (tasksList.length > 0) {
    content = (
      <ul className="flex flex-col gap-3">
        {tasksList.map((task, id) => {
          return (
            <li className="flex justify-between mx-2" key={id}>
              <p className="bg-stone-200 rounded-md p-2 w-[16rem] text-stone-700">
                {task}
              </p>
              <button
                className="bg-stone-200 rounded-xl px-2 text-stone-700 hover:bg-stone-400 hover:text-stone-600"
                onClick={() => deleteTask(idElem, id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
  return <>{content}</>;
}

// each task is an object with the following properties: id and description
