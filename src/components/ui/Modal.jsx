import { projectDescription } from "@/constants";
import { imgReact } from "@/assets/images";

const Modal = () => {
  return (
    <dialog id="modal-info" className="modal">
      <div className="relative modal-box bg-base-100 rounded-xl sh-border-animated">
        <h3 className="text-lg font-hardcore text-center">Project Info</h3>
        <ul className="text-white space-y-1 ">
          {projectDescription.map((item, index) => (
            <li key={index} className="font-bangers flex items-end gap-2">
              <span className="text-accent mt-1">★</span>{item}
            </li>
          ))}
        </ul>
        <img src={imgReact} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sh-react-logo w-18" alt="react-logo" />
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}

export default Modal;
