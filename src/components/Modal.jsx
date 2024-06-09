import { createPortal } from "react-dom";
import { useRef, forwardRef, useImperativeHandle } from "react";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-10 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="flex flex-col items-center">
        <button className="bg-stone-700 text-stone-200 font-bold py-2 px-4 mt-3 rounded-2xl">
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
