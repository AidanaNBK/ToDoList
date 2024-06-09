import Input from "./Input.jsx";

export default function NewProject(props) {
  return (
    <div>
      <menu className="flex items-center justify-end gap-4 my-4">
        <li className="flex justify-between my-4">
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Cancel
          </button>
        </li>
        <li className="flex justify-between my-4">
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input>Title</Input>
        <Input isLabel={true}>Description</Input>
        <Input>Due Date</Input>
      </div>
    </div>
  );
}
