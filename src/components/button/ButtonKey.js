import React from "react";

const ButtonKey = ({ text, isHighlighted, onClick, isCapsLock, isSpaceBar, isBackspace, isEscape, isEnter, isAlt, isTab, isControl, isOption, isF10, isShift , isF11,isGreenToggleOn }) => {

  const KeyStyle = {
    width: isCapsLock ? '120px' : isBackspace ? '120px' : isSpaceBar ? '450px': isEscape ? '100px': isEnter ? '90px': isTab ? '80px': isAlt ? '60px': isControl ? '110px' : isOption ? '120px': isShift ? '110px' : isF10? '60px': isF11 ? '60px' : '50px',
  }

  return (
    <div className="text-foreColorWhite">
      <button
        className={`px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg border-2 border-gray-500 w-[100px] hover:bg-foreColorWhite hover:text-backColor hover:border-2 border-foreColorWhite duration-300 ${
          isHighlighted ? "bg-foreColorRed" : ""
        } ${isGreenToggleOn ? "bg-foreColorGreen" : ""}`}
        onClick={onClick}
        style={KeyStyle}
      >
        {text}
      </button>
    </div>
  );
};

export default ButtonKey;
