import Input from "./Input.jsx";
import { useRef } from "react";

export default function NewProject(props) {
  let title = useRef();
  let description = useRef();
  let date = useRef();

  function savePress(title, descr, date) {
    // validation!
    props.saveClick({
      title: title,
      description: descr,
      date: date,
      tasks: [],
    });
  }

  return (
    <div className="w-[35rem] mt-8 mr-3">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li className="flex justify-between my-4">
          <button
            onClick={props.cancelClick}
            className="px-6 py-2 rounded-md bg-stone-300 text-stone-50 hover:bg-stone-600"
          >
            Cancel
          </button>
        </li>
        <li className="flex justify-between my-4">
          <button
            onClick={() =>
              savePress(
                title.current.value,
                description.current.value,
                date.current.value
              )
            }
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title}>
          Title
        </Input>
        <Input ref={description} isLabel={true}>
          Description
        </Input>
        <Input type="date" ref={date}>
          Due Date
        </Input>
      </div>
    </div>
  );
}
