export default function Input({ isLabel, children, ...props }) {
  return (
    <p>
      <label className="text-sm font-bold uppercase text-stone-500">
        {children}
      </label>
      {!isLabel ? (
        <input
          {...props}
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        ></input>
      ) : (
        <textarea
          {...props}
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        ></textarea>
      )}
    </p>
  );
}
