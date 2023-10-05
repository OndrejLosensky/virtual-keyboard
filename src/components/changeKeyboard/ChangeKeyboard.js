import React, { useState, useEffect, useRef } from "react";

const ChangeKeyboard = ({ onLayoutChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Tato funkce automaticky zavře dropdown menu jakmile kliknu kamkoliv vedle
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
    setIsDropdownOpen(!isDropdownOpen); // tato funkce spouští dropdown menu
  };

  const handleLayoutItemClick = (layout) => {
    onLayoutChange(layout); // změna layout při kliknutí na tlačítko
    setIsDropdownOpen(false); // zavře dropdown menu jakmile kliknu na tlačítko
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="text-white py-2 px-4 rounded-md"
      >
        Změnit klávesnici
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-4 w-40 bg-white border shadow-md rounded-md">
          <ul>
            <li>
              <button
                className="block w-full py-2 px-4 text-left hover:bg-btnbg duration-300"
                onClick={() => handleLayoutItemClick("czech")}
              >
                Česká [CZ]
              </button>
            </li>
            <li>
              <button
                className="block w-full py-2 px-4 text-left hover:bg-btnbg duration-300"
                onClick={() => handleLayoutItemClick("english")}
              >
                Anglická [ENG]
              </button>
            </li>
            <li>
            <button
                className="block w-full py-2 px-4 text-left hover:bg-btnbg duration-300"
                onClick={() => handleLayoutItemClick("macbook")}
              >
                MacOS kl.
              </button>
            </li>
            <button
                className="block w-full py-2 px-4 text-left hover:bg-btnbg duration-300"
                onClick={() => handleLayoutItemClick("windows")}
              >
                Windows kl.
              </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ChangeKeyboard;