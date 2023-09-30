import React, { useState, useEffect } from "react";
import DisplayKey from "../displayKey/DisplayKey";
import ButtonKey from "../button/ButtonKey";

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
          
                <div className="flex justify-start h-screen sm:pt-8 sm:px-16 md:pt-12 md:px-24  lg:pt-16 lg:px-32 xxl:pt-32 xxl:px-64 items-center ">
                    <div className=" h-[45%] w-[65%] flex flex-col gap-2 " >
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
                          <h3 className="text-foreColorWhite flex justify-center sm:font-light items-center pt-2 text-sm"> Poslední kliknuté tlačítko: "{x}"  </h3>               
                      </div>  
                    </div>
                    
              </div>         
              
        </div>            
    )
}

export default Keyboard