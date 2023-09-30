import React, { useState } from "react";
import appleIcon from "../assets/appleIcon.png";
import windowsIcon from "../assets/windowsIcon.png";

const ChangeOSKeyboard = () => {
  // useState pro rozpoznání aktuální ikony
  const [currentIcon, setCurrentIcon] = useState(appleIcon);

    // přepínání ikon podle toho která je aktivní
  const toggleIcon = () => {
    setCurrentIcon(currentIcon === appleIcon ? windowsIcon : appleIcon);
  };

  return (
    <div>
      <button className="" onClick={toggleIcon}>
      <img src={currentIcon} alt="Icon" className="max-w-[36px] max-h-[36px]"/>
      </button>
    </div>
  );
};

export default ChangeOSKeyboard;