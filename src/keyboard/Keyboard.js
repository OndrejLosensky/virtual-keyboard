import React, { useState, useEffect } from "react";
import DisplayKey from "../displayKey/DisplayKey";
import ButtonKey from "../button/ButtonKey";
import InputKeyboard from "../inputKeyboard/InputKeyboard";
import ChangeKeyboard from "../changeKeyboard/ChangeKeyboard";
import ChangeOSKeyboard from "../changeKeyboard/ChangeOSKeyboard";
import refreshIcon from "../assets/refreshIcon.png"

const Keyboard = () => {

  const [x, setX] = useState('');
  const [clickedKeys, setClickedKeys] = useState([]);
  const [buttonColors, setButtonColors] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [buttonSuccess, setButtonSuccess] = useState({});
  const [isGreenToggleOn, setIsGreenToggleOn] = useState(false);

  const handlePhysicalKeyboardInput = (e) => {
    if (e.key === "Backspace") {
      // smaže poslední přidaný charakter
      setInputValue((prevValue) => prevValue.slice(0, -1));
    } else {
      // řeší ostatní klávesy na fyzické klávesnici
      setInputValue((prevValue) => prevValue + e.key);
    }
  };

  const handleButtonClick = (newValue, buttonText) => {
    if (newValue === "BACKSPACE") {
      setInputValue((prevValue) => prevValue.slice(0, -1));
    } else {
      setX(newValue);
      setClickedKeys([...clickedKeys, buttonText]);
      setInputValue(inputValue + newValue);
    }

    setButtonSuccess((prevState) => ({
      ...prevState,
      [buttonText]: true,
    }));
  
    if (isGreenToggleOn) {
      // Označí tlačítko zeleně pokud je funkční
      setButtonSuccess((prevState) => ({
        ...prevState,
        [buttonText]: true,
      }));
    }
  };

  const logKeyPressed = (key) => {
    console.log(`Stisknutá klávesa: ${key}`);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      setButtonColors((prevColors) => ({
        ...prevColors,
        [key]: true,
      }));
      logKeyPressed(key);
    };

    const handleKeyUp = (e) => {
      const key = e.key.toLowerCase();
      setButtonColors((prevColors) => ({
        ...prevColors,
        [key]: false,
      }));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // rozpoznává reálné klávesy od kliknutí na té virtuální
    window.addEventListener("keypress", handlePhysicalKeyboardInput);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("keypress", handlePhysicalKeyboardInput);
    };
  }, []);

    return (
        <div>

            <p className="text-foreColorWhite pt-6  text-center text-lg font-thin">

              Jednoduchá virtuální klávesnice, která zobrazuje jaké klávesy stisknete,<br/>
              a také obsahuje funkci pro otestování funkčnosti vaší klávesnice <br/>
              klávesnice je dostupná v českém rozložení a anglickém a ve verzích na Mac a Windows <br/>
              kliknutím <span className="cursor-pointer text-foreColorOrange font-semibold" onClick={() => setIsGreenToggleOn(!isGreenToggleOn)} style={{ textDecoration: "underline" }}> zde</span> spustíte test funkčnosti vaší klávesnice

            </p>

              {/*přidání tlačítka, které vždy obnoví stránku po kliknutí na něj*/}
            <div className="absolute top-0 right-0 mr-8 mt-6 cursor-pointer ">
              <img src={refreshIcon} alt="refresh" onClick={() => window.location.reload()}/>
            </div>

            <InputKeyboard inputValue={inputValue} setInputValue={setInputValue} />

                <div className="flex justify-start h-screen tablet:pt-12 tablet:px-16 laptop:pt-24 laptop:px-32 bigScreen:px-80 bigScreen:pt- items-start ">
                 <div className="text-white rounded-lg text-foreColorWhite
                     absolute left-0 top-0 ml-8 mt-4 flex flex-row">

                      <div className="border-[2px] border-foreColorWhite mr-4 rounded-lg">
                        <ChangeKeyboard/>
                      </div>
                    
                      <div className="mt-1 mr-4 rounded-lg">
                        <ChangeOSKeyboard/>
                      </div>  
                     
                  </div>  
                
                    <div className=" h-[45%] w-[60%] flex flex-col gap-2 px-4 pt-4">
                        {/* Vrchní řada znaků ESC - F9*/}
                        <div className="flex flex-row gap-2">
                            {["escape", "f1", "f2", "f3", "f4", "f5", "f6","f7", "f8", "f9", "|"].map((key) => (
                             <ButtonKey
                             buttonSuccess={buttonSuccess[key]}
                             isGreenToggleOn={isGreenToggleOn}
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
                            buttonSuccess={buttonSuccess[key]}
                            isGreenToggleOn={isGreenToggleOn}
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
                            buttonSuccess={buttonSuccess[key]}
                            isGreenToggleOn={isGreenToggleOn}
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
                            buttonSuccess={buttonSuccess[key]}
                            isGreenToggleOn={isGreenToggleOn}
                            key={key}
                            text={key}
                            isHighlighted={buttonColors[key.toLowerCase()]}
                            onClick={() => handleButtonClick(key.toUpperCase())}
                          />
                          ))}
                        </div>
                      
                            
                        {/* Pátá řada znaků CONTROL - <>*/}
                        <div className="flex flex-row gap-2">
                          {["control", "y", "x", "c", "v", "b", "n", "m", "?", "alt"].map((key) => (
                            <ButtonKey
                            buttonSuccess={buttonSuccess[key]}
                            isGreenToggleOn={isGreenToggleOn}
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
                              <h3 className="text-foreColorWhite flex justify-center sm:font-light items-center pt-1 pb-2 text-md uppercase"> Virtuální klávesnice </h3>   
                              <p className="text-foreColorWhite text-sm flex justify-center"> "{x}"</p>            
                            </div>  
                          </div>
                    
                        </div>         
  
        </div>            
    )
}

export default Keyboard