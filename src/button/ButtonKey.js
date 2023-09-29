import React from "react";

function ButtonKey({ text, onClick }) {
  return (
    <div className="text-foreColorWhite">
      <button
        className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg border-2 border-gray-500 uppercase hover:bg-foreColorWhite hover:text-backColor hover:border-2 border-foreColorWhite duration-300"
        onClick={onClick} // Povolí onClick funkci pro Keyboard.js
      >
        {text}
      </button>
    </div>
  );
}

export default ButtonKey;