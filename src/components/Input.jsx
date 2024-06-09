import { forwardRef } from "react";

let Input = forwardRef(function Input({ isLabel, children, ...props }, ref) {
  const inputClasses =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="felx flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {children}
      </label>
      {!isLabel ? (
        <input ref={ref} {...props} className={inputClasses}></input>
      ) : (
        <textarea ref={ref} {...props} className={inputClasses}></textarea>
      )}
    </p>
  );
});

export default Input;
