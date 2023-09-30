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
        <div className="flex flex-col justify-center items-center pt-8">
           <p className="text-lg text-foreColorWhite pb-2"> "{pressedKey}" </p>
            <h2 className="text-foreColorWhite text-xl flex justify-center items-center uppercase pb-1 flex-row">
                 Zmáčkl jsi klávesu:
            </h2>
            <div className="border-b-2 border-foreColorWhite w-[100%]">

            </div>
        </div>
    )
}
export default DisplayKey