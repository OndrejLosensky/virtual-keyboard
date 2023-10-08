import React, { useState, useEffect, useRef } from "react";

const ChangeKeyboard = ({ onLayoutChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentLayout, setCurrentLayout] = useState("eng");
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLayoutItemClick = (layout) => {
    setCurrentLayout(layout);
    onLayoutChange(layout);
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex flex-row ">
     
      <div className="relative inline-block text-left border-[2px] border-foreColorWhite ml-12 mr-4 rounded-lg" ref={dropdownRef}>
        
        <button
          onClick={toggleDropdown}
          className="text-white py-2 px-4 rounded-md"
        >
          Změnit klávesnici
        </button>
        {isDropdownOpen && 'duration-500' && (
          <div className="absolute right-0 mt-4 w-40 bg-white border shadow-md rounded-md">
            <ul>
              <li>
                <button
                  className={`block w-full py-2 px-4 text-left hover:bg-btnbg duration-300 ${currentLayout === "eng" ? "bg-foreColorRed rounded-md text-white" : ""}`}
                  onClick={() => handleLayoutItemClick("eng")}
                >
                  Anglicky [ENG]
                </button>
              </li>
              <li>
                <button
                  className={`block w-full py-2 px-4 text-left hover:bg-btnbg duration-300 ${currentLayout === "cz" ? "bg-foreColorRed text-white" : ""}`}
                  onClick={() => handleLayoutItemClick("cz")}
                >
                  Česky [CZ]
                </button>
              </li>
              <li>
                <button
                  className={`block w-full py-2 px-4 text-left hover:bg-btnbg duration-300 ${currentLayout === "mac" ? "bg-foreColorRed text-white" : ""}`}
                  onClick={() => handleLayoutItemClick("mac")}
                >
                  MacOS
                </button>
              </li>
              <li>
                <button
                  className={`block w-full py-2 px-4 text-left hover:bg-btnbg duration-300 ${currentLayout === "win" ?"bg-foreColorRed text-white rounded-md" : ""}`}
                  onClick={() => handleLayoutItemClick("win")}
                >
                  Windows
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="">
          <p className="text-foreColorWhite flex justify-center mt-3 items-center uppercase font-semibold"> 
            {currentLayout}
          </p>
        </div>
     
    </div>

  );
};

export default ChangeKeyboard;