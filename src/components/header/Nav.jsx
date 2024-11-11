import { useState } from "react";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
<div className={`flex flex-col justify-center sticky top-0 z-10 backdrop-blur-md transition-opacity duration-300 ${isOpen ? "bg-dark-blue bg-opacity-100" : "bg-dark-blue bg-opacity-75"}`}>
      <nav className="flex mx-4 sm:mx-20 items-center justify-between">
        <div className="w-full">
         
          <div className="flex items-start justify-start sm:hidden py-4">
            <button onClick={toggleMenu} style={{ zIndex: isOpen ? "31" : "10" }}>
              <img
                className="w-10 h-6" 
                src="/imgs/icons/menu.png"
                alt="menu"
              />
            </button>
          </div>

            {/*Mobile Menu*/ }
          <ul className={`sm:hidden absolute top-15 left-0 w-full flex flex-col gap-2    bg-dark-blue text-white bg-opacity-100 p-4 transition-all duration-500 ease-in-out transform ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}`}style={{ zIndex: isOpen ? "30" : "-1" }} >
            <li><a className="duration-300 hover:text-light-blue" href="#">Home</a></li>
            <li><a className="duration-300 hover:text-light-blue" href="#">About</a></li>
            <li><a className="duration-300 hover:text-light-blue" href="#">Skills</a></li>
            <li><a className="duration-300 hover:text-light-blue" href="#">Projects</a></li>
          </ul>

            {/*Desktop Menu*/ }
          <ul className="sm:flex sm:flex-row hidden text-white text-xl p-6 justify-between w-full">
            <li><a className="duration-300 hover:text-light-blue" href="#">Home</a></li>
            <li><a className="duration-300 hover:text-light-blue" href="#">About</a></li>
            <li><a className="duration-300 hover:text-light-blue" href="#">Skills</a></li>
            <li><a className="duration-300 hover:text-light-blue" href="#">Projects</a></li>
          </ul>
        </div>
      </nav>
      <div className="sm:block hidden">
        <hr className="w-full" />
      </div>
    </div>
  );
}
