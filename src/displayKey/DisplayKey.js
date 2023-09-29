import React, { useState, useEffect } from "react";

const DisplayKey = () => {

    const [pressedKey, setPressedKey] = useState('');
  
    useEffect(() => {
      const handleKeyPress = (event) => {
        setPressedKey(event.key);
      };
  
      window.addEventListener('keydown', handleKeyPress);
  
      return () => {
        window.removeEventListener('keydown', handleKeyPress);
      };
    }, []);

    return (
        <div className="flex flex-col justify-center items-center pt-12">
            <h2 className="text-foreColorWhite text-xl flex justify-center items-center pt-4 uppercase">
                 Zmáčkl jsi klávesu: " {pressedKey} "
            </h2>
            <div className="border-b-2 border-foreColorWhite w-[30%] pt-2">

            </div>
        </div>
    )
}
export default DisplayKey