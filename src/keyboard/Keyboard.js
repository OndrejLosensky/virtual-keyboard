import React, { useState, useEffect } from "react";
import DisplayKey from "../displayKey/DisplayKey";
import ButtonKey from "../button/ButtonKey";
import InputKeyboard from "../inputKeyboard/InputKeyboard";

const Keyboard = () => {

  const [x, setX] = useState('');

  const handleButtonClick = (newValue, buttonText) => {
    setX(newValue);
    setClickedKeys([...clickedKeys, buttonText]);
  };

  const [clickedKeys, setClickedKeys] = useState([]);

  // Funkce pro zvýraznění klávesy, která je stisklá
  const [buttonColors, setButtonColors] = useState({});

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Změní barvu tlačítka, podle toho která klávesa je stisklá 
      const key = e.key.toLowerCase();
      setButtonColors((prevColors) => ({
        ...prevColors,
        [key]: true,
      }));
    };
    const handleKeyUp = (e) => {
        // Resetuje barvu jakmile se klávesa pustí
        const key = e.key.toLowerCase();
        setButtonColors((prevColors) => ({
          ...prevColors,
          [key]: false,
        }));
      };
  
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);
  
      return () => {
        // odstraní EventListener jakmile je klávesa puštěna
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }, []);

    return (
        <div>

            <InputKeyboard/>

              
                <div className="flex justify-start h-screen tablet:pt-4 tablet:px-16 laptop:px-32 laptop:pt-8 bigScreen:px-80 bigScreen:pt-16 items-center ">
                  <button
                    className="text-white py-2 px-4 rounded-lg border-[2px] text-foreColorWhite
                     border-foreColorWhite absolute left-0 top-0 mt-4 ml-8 hover:-translate-y-1 hover:duration-300"
                  >
                    Změnit klávesnici
                  </button>
                    <div className=" h-[45%] w-[65%] flex flex-col gap-2 px-4 pt-4">
                        {/* Vrchní řada znaků ESC - F9*/}
                        <div className="flex flex-row gap-2">
                            {["escape", "f1", "f2", "f3", "f4", "f5", "f6","f7", "f8", "f9", "|"].map((key) => (
                              <ButtonKey
                                key={key}
                                text={key}
                                isHighlighted={buttonColors[key.toLowerCase()]}
                                onClick={() => handleButtonClick(key.toUpperCase())}
                                />
                              ))}                    
                        </div>

  
                        {/* druhá řada znaků ; - DELETE*/}
                        <div className="flex flex-row gap-2">
                          {[";", "1", "2", "3", "4", "5", "6","7", "8", "9", "0", "backspace"].map((key) => (
                            <ButtonKey
                            key={key}
                            text={key}
                            isHighlighted={buttonColors[key.toLowerCase()]}
                            onClick={() => handleButtonClick(key.toUpperCase())}
                          />
                        ))}                    
                        </div>

                        {/* Třetí řada znaků TAB - ENTER*/}
                        <div className="flex flex-row gap-2">
                          {["Tab", "Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "Enter"].map((key) => (
                            <ButtonKey
                              key={key}
                              text={key}
                              isHighlighted={buttonColors[key.toLowerCase()]}
                              onClick={() => handleButtonClick(key.toUpperCase())}
                            />
                          ))}
                        </div>

                      
                        {/* Čtvrtá řadu znaků CAPS - AC */}   
                        <div className="flex flex-row gap-2">
                          {["capslock", "a", "s", "d", "f", "g", "h", "j", "k", "l", "ů", "AC"].map((key) => (
                            <ButtonKey
                              key={key}
                              text={key}
                              isHighlighted={buttonColors[key.toLowerCase()]}
                              onClick={() => handleButtonClick(key.toUpperCase())}
                            />
                          ))}
                        </div>
                      
                            
                        {/* Pátá řada znaků CONTROL - <>*/}
                        <div className="flex flex-row gap-2">
                          {["control", "y", "x", "c", "v", "b", "n", "m", "?", "alt", "<"].map((key) => (
                            <ButtonKey
                              key={key}
                              text={key}
                              isHighlighted={buttonColors[key.toLowerCase()]}
                              onClick={() => handleButtonClick(key.toUpperCase())}
                            />
                          ))}
                        </div>

                        {/* Poslední řada znaků FN - OPTION*/}
                        <div className="flex flex-row gap-2">
                            
                        </div>     
                    </div>    
                    <div className="px-24 py-12 mx-auto"> 
                      <div className="flex flex-col"> 
                        <DisplayKey/> {/*Zobrazuje zmačknuté klávesy na fyzické klávesnice*/}
                          {/*Zobrazuje sktisknuté tlačítka na té virtuální*/}
                          <h3 className="text-foreColorWhite flex justify-center sm:font-light items-center pt-2 text-md"> Poslední kliknuté tlačítko: </h3>   
                          <p className="text-foreColorWhite text-sm flex justify-center"> "{x}"</p>            
                      </div>  
                    </div>
                    
              </div>         
              
        </div>            
    )
}

export default Keyboard