import React, { useState } from "react";

const ChangeKeyboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const handleClick = () => {
    alert("tato funkce není momentálně")
  }

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className=" text-white py-2 px-4 rounded-md"
      >
        Změnit klávesnici
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-4 w-40 bg-white border shadow-md rounded-md">

          <ul>
            <li>
              <button className="block w-full py-2 px-4 text-left hover:bg-btnbg" onClick={handleClick}>
                Česká [CZ]
              </button>
            </li>
            <li>
              <button className="block w-full py-2 px-4 text-left" onClick={handleClick}>
                Anglická [ENG]
              </button>
            </li>

          </ul>
        </div>
      )}
    </div>
  );
};

export default ChangeKeyboard
