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
          <div className="flex flex-row">
              
              <p className="text-lg text-foreColorWhite pb-2 uppercase text-right"> "{pressedKey}" </p>
          </div>
          
           
            <div className="border-b-2 border-foreColorWhite w-[100%]"> 

            </div>
        </div>
    )
}
export default DisplayKey